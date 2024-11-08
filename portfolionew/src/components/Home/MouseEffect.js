// MouseEffect.js
import React, { useEffect, useState } from 'react';
import './MouseEffect.css';

const MouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="mouse-effect" style={{ left: mousePosition.x, top: mousePosition.y }} />
  );
};

export default MouseEffect;
