import { Dispatch, SetStateAction } from "react";

export type Earth3dProps = {
  targetRotation: number[];
  onRotationStart: () => void;
  onRotationEnd: () => void;
  setLoaded: Dispatch<SetStateAction<boolean>>;
};

export type EarthMeshProps = Earth3dProps;
