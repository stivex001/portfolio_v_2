import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

// nodejs runtime so we can read local files with fs
export const runtime = "nodejs";
export const alt = "Stephen Adeyemo — Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const imageBuffer = fs.readFileSync(
    path.join(process.cwd(), "public/assets/stephen.png")
  );
  const photoSrc = `data:image/png;base64,${imageBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#251C31",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow — top right */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: -140,
            right: 280,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Background glow — bottom left */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: -100,
            left: -80,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Left — text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "64px 48px 64px 88px",
          }}
        >
          {/* Blue accent bar */}
          <div
            style={{
              display: "flex",
              width: 48,
              height: 4,
              background: "#60A5FA",
              borderRadius: 2,
              marginBottom: 36,
            }}
          />

          {/* Name */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "#F5F5F5",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Stephen Adeyemo
          </div>

          {/* Role badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 40,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#60A5FA",
              }}
            />
            <div
              style={{
                fontSize: 22,
                fontWeight: 400,
                color: "#60A5FA",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Product Engineer
            </div>
          </div>

          {/* Stack tags */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 44,
            }}
          >
            {["React", "Next.js", "React Native", "TypeScript"].map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "6px 16px",
                  borderRadius: 20,
                  background: "rgba(96,165,250,0.1)",
                  border: "1px solid rgba(96,165,250,0.25)",
                  fontSize: 14,
                  color: "#93C5FD",
                  letterSpacing: "0.02em",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 17,
              color: "#9CA3AF",
              lineHeight: 1.75,
            }}
          >
            Building thoughtful products from Abuja, Nigeria.
          </div>

          {/* Domain */}
          <div
            style={{
              marginTop: 48,
              fontSize: 14,
              color: "#4B5563",
              letterSpacing: "0.1em",
            }}
          >
            stephenadeyemo.dev
          </div>
        </div>

        {/* Right — photo */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            width: 360,
          }}
        >
          <img
            src={photoSrc}
            width={320}
            height={430}
            style={{
              objectFit: "cover",
              objectPosition: "top",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
