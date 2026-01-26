import React, { useRef, useEffect, useState } from "react";

const ScratchCard = ({ onComplete }) => {
  const canvasRef = useRef(null);
  const [scratched, setScratched] = useState(false);
  const [completed, setCompleted] = useState(false); // scratch threshold reached

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 160;

    // 1. Create Metallic Gradient Background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#C0C0C0"); // Silver
    gradient.addColorStop(0.2, "#E0E0E0");
    gradient.addColorStop(0.4, "#F5F5F5"); // Highlight
    gradient.addColorStop(0.6, "#E0E0E0");
    gradient.addColorStop(0.8, "#B0B0B0"); // Darker Silver
    gradient.addColorStop(1, "#909090");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Add Pattern (Subtle dots)
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    for (let i = 0; i < canvas.width; i += 10) {
      for (let j = 0; j < canvas.height; j += 10) {
        if ((i + j) % 20 === 0) {
           ctx.beginPath();
           ctx.arc(i, j, 1, 0, Math.PI * 2);
           ctx.fill();
        }
      }
    }

    // 3. Add Instruction Text
    ctx.font = "bold 20px 'Poppins', sans-serif";
    ctx.fillStyle = "#6B7280"; // Gray-500
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Shadow for text to make it look engraved or embossed
    ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;
    ctx.fillText("SCRATCH HERE", canvas.width / 2, canvas.height / 2);

    // Reset shadow for scratching
    ctx.shadowColor = "transparent";
    
    // 4. Add Decorative Border
    ctx.strokeStyle = "#A3A3A3";
    ctx.lineWidth = 4;
    ctx.strokeRect(4, 4, canvas.width - 8, canvas.height - 8);

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
    ctx.arc(x, y, 25, 0, Math.PI * 2);
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

    if (cleared / (canvas.width * canvas.height) > 0.60) {
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
    <div className="relative w-[300px] h-[160px] rounded-xl overflow-hidden bg-white shadow-inner">
      {/* Hidden Content (Reveals as you scratch) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-indigo-50 p-4 select-none">
        <span className="text-4xl">🎁</span>
        <h3 className="font-bold text-primary text-xl mt-2 animate-pulse">Surprise! Your smart buying pass is unlocked</h3>
     
      </div>

      {/* Scratch Surface */}
      <canvas
        ref={canvasRef}
        onMouseMove={(e) => e.buttons === 1 && scratch(e)}
        onMouseUp={handleRelease}
        onTouchMove={scratch}
        onTouchEnd={handleRelease}
        className="absolute inset-0 z-10 cursor-pointer touch-none"
      />
    </div>
  );
};

export default ScratchCard;