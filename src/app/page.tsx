"use client"

import { DockComponent } from "@/components/dock";
import { downloadTrack } from "@/services/spotifyService";
import { useState } from "react";

export default function Home() {
  const [track, setTrack] = useState("Photograph Ed Sheeran");
  const [quality, setQuality] = useState("sq");
  const [downloadLink, setDownloadLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    try {
      const data = await downloadTrack(track, quality);
      setDownloadLink(data.downloadLink); // فرض می‌کنیم پاسخ شامل لینک دانلود است
      setError(null);
    } catch (error) {
      setError("خطا در دریافت لینک دانلود");
      setDownloadLink(null);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>دریافت لینک دانلود آهنگ</h1>
      <input
        type="text"
        placeholder="نام آهنگ"
        value={track}
        onChange={(e) => setTrack(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <select
        value={quality}
        onChange={(e) => setQuality(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      >
        <option value="sq">کیفیت استاندارد</option>
        <option value="hq">کیفیت بالا</option>
      </select>
      <button onClick={handleDownload} style={{ padding: "5px 10px" }}>
        دریافت لینک
      </button>

      {downloadLink && (
        <div style={{ marginTop: "20px" }}>
          <h3>لینک دانلود:</h3>
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            دانلود آهنگ
          </a>
        </div>
      )}
      <DockComponent />
      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}
    </div>
  );
}