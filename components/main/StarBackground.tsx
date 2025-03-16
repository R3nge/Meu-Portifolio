"use client";

import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere, setSphere] = useState(() =>
    random.inSphere(new Float32Array(8000), { radius: 1.2 })
  );
  const [fallingStars, setFallingStars] = useState<any[]>([]);
  const [starColor, setStarColor] = useState("#fff");
  const [starSize, setStarSize] = useState(0.002);

  // Criar estrelas cadentes aleatórias
  useEffect(() => {
    const interval = setInterval(() => {
      setFallingStars((prev) => [
        ...prev,
        {
          id: Math.random(),
          position: [Math.random() * 2 - 1, 1, Math.random() - 0.5],
          speed: Math.random() * 0.02 + 0.01,
        },
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }

    // Atualizar a posição das estrelas cadentes
    setFallingStars((prev) => prev.map(star => ({
      ...star,
      position: [star.position[0], star.position[1] - star.speed, star.position[2]],
    })).filter(star => star.position[1] > -1));
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color={starColor} size={starSize} sizeAttenuation={true} depthWrite={false} />
      </Points>

      {fallingStars.map((star) => (
        <mesh key={star.id} position={star.position}>
          <sphereGeometry args={[0.005, 16, 16]} />
          <meshBasicMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[-1] pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarBackground />
    </Canvas>
  </div>
);

export default StarsCanvas;