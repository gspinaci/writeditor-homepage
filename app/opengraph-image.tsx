import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Writ: write scientific papers in HTML";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(60deg,#6d4fe3,#8a6cf0 55%,#4fb8b0)", color: "white" }}>
        <div style={{ fontSize: 40, fontWeight: 700, color: "#5ff2d6" }}>Writ</div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.1, marginTop: 24 }}>Write scientific papers in HTML.</div>
        <div style={{ fontSize: 40, marginTop: 28 }}>A WYSIWYG editor for you, your co-authors and your AI agents.</div>
      </div>
    ),
    size,
  );
}
