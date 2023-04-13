import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Box = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={4}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color='#211e35'
          opacity={0.28}
          transparent={true}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 0.5]}
          rotation={[0, Math.PI/4, 0]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
      
    </Float>
  );
};

const BoxCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Box imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BoxCanvas;
