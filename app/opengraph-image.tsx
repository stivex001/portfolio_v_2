import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Stephen Adeyemo — Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#251C31",
          padding: "80px 96px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Blue overline accent */}
        <div
          style={{
            width: 48,
            height: 3,
            background: "#60A5FA",
            borderRadius: 2,
            marginBottom: 40,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#F5F5F5",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          Stephen Adeyemo
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: "#60A5FA",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: 48,
          }}
        >
          Product Engineer
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 18,
            color: "#9CA3AF",
            lineHeight: 1.7,
            maxWidth: 640,
          }}
        >
          Building fast, thoughtful products with React, Next.js, and React
          Native. Based in Abuja, Nigeria.
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 64,
            right: 96,
            fontSize: 14,
            color: "#6B7280",
            letterSpacing: "0.08em",
          }}
        >
          stephenadeyemo.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
