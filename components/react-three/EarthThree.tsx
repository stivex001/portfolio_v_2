"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { Earth3dProps } from "./props";
import EarthThreeLoading from "./EarthThreeLoading";
import { useState } from "react";

const LightTextureURL = "/assets/react-three/textures/earth-white.png";
const DarkTextureURL = "/assets/react-three/textures/earth-black.png";

export default function EarthThree({
  targetRotation,
  onRotationStart,
  onRotationEnd,
  setLoaded,
}: Earth3dProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme: theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const stateRef = useRef({
    renderer: null as THREE.WebGLRenderer | null,
    mesh: null as THREE.Mesh | null,
    animFrameId: 0,
    currentRotation: [0, 0, 0] as number[],
    targetRotation: [0, 0, 0] as number[],
    velocity: [0, 0, 0] as number[],
    isSpringActive: false,
  });

  // Propagate new target into the ref and start spring
  useEffect(() => {
    stateRef.current.targetRotation = targetRotation;
    stateRef.current.isSpringActive = true;
    onRotationStart();
  }, [targetRotation, onRotationStart]);

  // Update texture when theme changes
  useEffect(() => {
    const mesh = stateRef.current.mesh;
    if (!mesh) return;
    const url = theme === "light" ? LightTextureURL : DarkTextureURL;
    new THREE.TextureLoader().load(url, (tex) => {
      (mesh.material as THREE.MeshStandardMaterial).map = tex;
      (mesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
    });
  }, [theme]);

  // Mount Three.js scene once
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.set(0, 0, 2.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);
    stateRef.current.renderer = renderer;

    scene.add(new THREE.AmbientLight(0xffffff, 3));

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ toneMapped: false });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    stateRef.current.mesh = mesh;

    const initialURL = document.documentElement.classList.contains("dark")
      ? DarkTextureURL
      : LightTextureURL;

    new THREE.TextureLoader().load(initialURL, (tex) => {
      material.map = tex;
      material.needsUpdate = true;
      setIsLoading(false);
      setLoaded(true);
    });

    // Spring physics constants matching the original config
    const TENSION = 350;
    const FRICTION = 75;
    const REST_THRESHOLD = 0.0005;
    const DT = 1 / 60;

    const animate = () => {
      stateRef.current.animFrameId = requestAnimationFrame(animate);
      const s = stateRef.current;

      if (s.isSpringActive) {
        let atRest = true;
        for (let i = 0; i < 3; i++) {
          const force =
            -TENSION * (s.currentRotation[i] - s.targetRotation[i]) -
            FRICTION * s.velocity[i];
          s.velocity[i] += force * DT;
          s.currentRotation[i] += s.velocity[i] * DT;

          if (
            Math.abs(s.currentRotation[i] - s.targetRotation[i]) >
              REST_THRESHOLD ||
            Math.abs(s.velocity[i]) > REST_THRESHOLD
          ) {
            atRest = false;
          }
        }

        mesh.rotation.set(
          s.currentRotation[0],
          s.currentRotation[1],
          s.currentRotation[2]
        );

        if (atRest) {
          s.isSpringActive = false;
          onRotationEnd();
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    const state = stateRef.current;
    return () => {
      cancelAnimationFrame(state.animFrameId);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={mountRef} className="w-full h-full relative">
      {isLoading && <EarthThreeLoading />}
    </div>
  );
}
