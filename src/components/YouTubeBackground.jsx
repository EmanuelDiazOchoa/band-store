import React, { useEffect, useRef, useState } from "react";

const videos = [
  "73Bpyta8vOs", // Pink Floyd
  "qnFU-DxwpRs", // Guns N Roses
  "PMPnE9810Fc", // Peppers
  "7-thChxjcVw", // Black Sabbath
  "Opxhh9Oh3rg", // Beatles
  "PD-MdiUm1_Y", // Led Zeppelin
  "k2hGmoWFzaA", // REM
  "whQQpwwvSh4", // AC/DC
  "U5HAEzEk8QM", // Rammstein
  "UfA2hODCVAI", // Rolling Stones
];

export default function VideoBackground() {
  const iframeRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 60000); // cada 1 minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <iframe
        key={videos[index]}
        ref={iframeRef}
        className="w-full h-full pointer-events-none"
        src={`https://www.youtube.com/embed/${videos[index]}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videos[index]}&modestbranding=1&showinfo=0&rel=0`}
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
      />
    </div>
  );
}

