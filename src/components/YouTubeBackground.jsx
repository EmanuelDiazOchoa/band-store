import React, { useEffect, useState } from "react";

const videos = [
  "73Bpyta8vOs", // Pink Floyd
  "qnFU-DxwpRs", // Guns N Roses
  "PMPnE9810Fc", // Red Hot
  "7-thChxjcVw", // Sabbath
  "Opxhh9Oh3rg", // Beatles
  "PD-MdiUm1_Y", // Zeppelin
  "k2hGmoWFzaA", // REM
  "whQQpwwvSh4", // ACDC
  "U5HAEzEk8QM", // Rammstein
  "UfA2hODCVAI"  // Rolling Stones
];

export default function VideoBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 60000); // cambia cada 1 minuto

    return () => clearInterval(interval);
  }, []);

  const videoId = videos[index];
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}&modestbranding=1&rel=0`;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <iframe
        key={videoId}
        src={url}
        frameBorder="0"
        allow="autoplay; fullscreen"
        className="w-full h-full object-cover"
        allowFullScreen
      />
    </div>
  );
}

