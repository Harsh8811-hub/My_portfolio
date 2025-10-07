import React, { useEffect, useRef } from "react";

export interface SimpleBackgroundProps {
  colors?: string[];
  style?: React.CSSProperties;
  className?: string;
}

const defaultColors = ["#1a1a2e", "#16213e", "#0f3460"];

export default function SimpleBackground({
  colors = defaultColors,
  style = {},
  className = "",
}: SimpleBackgroundProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      console.log("SimpleBackground: No container ref");
      return;
    }

    console.log("SimpleBackground: Initializing animated background");
    const container = containerRef.current;
    let time = 0;

    const animate = () => {
      time += 0.005;

      // Create multiple moving gradients for fluid effect
      const x1 = 50 + Math.sin(time) * 30;
      const y1 = 50 + Math.cos(time * 0.7) * 30;
      const x2 = 50 + Math.sin(time * 1.3 + 2) * 25;
      const y2 = 50 + Math.cos(time * 0.9 + 1) * 25;
      const x3 = 50 + Math.sin(time * 0.8 + 4) * 20;
      const y3 = 50 + Math.cos(time * 1.1 + 3) * 20;

      // Create layered gradients for more complex fluid motion
      const gradient1 = `radial-gradient(circle at ${x1}% ${y1}%, ${colors[0]} 0%, transparent 50%)`;
      const gradient2 = `radial-gradient(circle at ${x2}% ${y2}%, ${colors[1]} 0%, transparent 40%)`;
      const gradient3 = `radial-gradient(circle at ${x3}% ${y3}%, ${colors[2]} 0%, transparent 60%)`;

      // Combine gradients with different blend modes
      container.style.background = `
        ${gradient1},
        ${gradient2},
        ${gradient3},
        linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)
      `;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colors]);

  console.log("SimpleBackground: Rendering with colors:", colors);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full fixed inset-0 -z-50 ${className || ""}`}
      style={{
        background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
        minHeight: "100vh",
        minWidth: "100vw",
        ...style,
      }}
    />
  );
}
