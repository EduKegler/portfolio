import { ImageResponse } from "next/og";

export const alt = "Eduardo Kegler, Senior Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const level1 = "#2f314c";
const level4 = "#8b8ba7";
const level5 = "#e2e2e9";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "40px",
          backgroundColor: "#ffffff",
          backgroundImage:
            "linear-gradient(133deg, rgba(255,180,176,0.1) 0%, rgba(255,221,201,0.1) 34%, rgba(207,255,223,0) 45%, rgba(189,238,254,0.1) 54%, rgba(191,185,255,0.1) 63%)",
        }}
      >
        <div style={{ height: 1, backgroundColor: level5 }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 108px",
            fontSize: 52,
            lineHeight: 1.25,
            color: level4,
          }}
        >
          <div style={{ display: "flex" }}>
            <span style={{ color: level1 }}>Trading surfaces, auth flows</span>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{ color: level1 }}>and frontend systems</span>
            <span>&nbsp;for crypto</span>
          </div>
          <div style={{ display: "flex" }}>and fintech products.</div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 40 }}>
          <div style={{ flex: 1, height: 1, backgroundColor: level5 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, color: level1 }}>Eduardo Kegler</span>
            <span style={{ fontSize: 22, color: level4 }}>
              Senior Frontend Engineer
            </span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
