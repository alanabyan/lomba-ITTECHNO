'use client';

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from "@/components/Loader";


//@ts-ignore
const Computers = ({ isMobile}) => {
  const computer = useGLTF("./robot_kecil/scene.gltf");
  

  return (
    <mesh>
      <hemisphereLight intensity={10.15} groundColor='#8E59FF' />
      <spotLight
        position={[-20, 50, 10]}
        angle={.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.5 : 20}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-1.5, 0.85, 1.6]}
      />
    </mesh>
  );
};

const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    //@ts-ignore
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="w-full h-full">

      <Canvas
      frameloop='demand'
      shadows
      dpr={[20, 2]}
      camera={{ position: [9, 20, 17], fov: 98 }}
      gl={{ preserveDrawingBuffer: true }}
      className="z-20"
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile}  />
      </Suspense>

      <Preload all />
      </Canvas>
    </div>
  );
};

export default RobotCanvas;
