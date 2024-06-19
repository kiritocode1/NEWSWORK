import { Canvas } from "@react-three/fiber";
import React from "react";
import Model from "./Model";

export default function Scene({ scrollProgress, className }) {
  return (
    <Canvas className={className}>
      <Model scrollProgress={scrollProgress} />
    </Canvas>
  );
}
