import React, { useState, useRef, useEffect } from "react";

const COLOR_CLASSES = {
  yellow: "bg-[#f6a709]",
};

const COLOR_KEYS = Object.keys(COLOR_CLASSES);

const GridCanvas = ({ cellCount = 3000 }) => {
  const [filledCells, setFilledCells] = useState({});
  const timeoutsRef = useRef({});

  const getColor = () => {
    return COLOR_KEYS[Math.floor(Math.random() * COLOR_KEYS.length)];
  };

  const handleMouseEnter = (index) => {
    const color = getColor();

    setFilledCells((prev) => ({
      ...prev,
      [index]: color,
    }));

    if (timeoutsRef.current[index]) {
      clearTimeout(timeoutsRef.current[index]);
    }

    timeoutsRef.current[index] = setTimeout(() => {
      setFilledCells((prev) => {
        const newState = { ...prev };
        delete newState[index];
        return newState;
      });
      delete timeoutsRef.current[index];
    }, 500);
  };

  return (
    <div className="absolute inset-0 z-0">
      <div
        className="grid bg-inherit w-full h-full leading-none text-[0] "
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(48px, 1fr))",
        }}
      >
        {Array.from({ length: cellCount }, (_, i) => (
          <div
            key={i}
            onPointerEnter={() => handleMouseEnter(i)}
            style={{
              pointerEvents: "auto", // 🔥 allow just this to receive hover
            }}
            className={`transition-all duration-300 ease-in border border-[#848484] blur-[1px] aspect-square ${
              filledCells[i] ? COLOR_CLASSES[filledCells[i]] : "bg-inherit "
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GridCanvas;
