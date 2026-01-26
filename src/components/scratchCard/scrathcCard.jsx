import React, { useRef, useEffect, useState } from "react";

const ScratchCard = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const [scratched, setScratched] = useState(false);
  const [completed, setCompleted] = useState(false); // scratch threshold reached

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 320;
    canvas.height = 180;

    // Cover layer
    ctx.fillStyle = "#9CA3AF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Erase mode
    ctx.globalCompositeOperation = "destination-out";
  }, []);

  const scratch = (e) => {
    if (scratched || completed) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const x =
      (e.clientX || e.touches[0].clientX) - rect.left;
    const y =
      (e.clientY || e.touches[0].clientY) - rect.top;

    ctx.beginPath();
    ctx.arc(x, y, 18, 0, Math.PI * 2);
    ctx.fill();

    checkProgress();
  };

  const checkProgress = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    );

    let cleared = 0;

    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) cleared++;
    }

    if (cleared / (canvas.width * canvas.height) > 0.95) {
      setCompleted(true); // scratched enough
    }
  };

  // 👉 When user removes hand / mouse
  const handleRelease = () => {
    if (!completed || scratched) return;

    setScratched(true);

    // Give user 1 second to read
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={(e) => e.buttons === 1 && scratch(e)}
      onMouseUp={handleRelease}
      onTouchMove={scratch}
      onTouchEnd={handleRelease}
      className="rounded-xl cursor-pointer"
    />
  );
};

export default ScratchCard;