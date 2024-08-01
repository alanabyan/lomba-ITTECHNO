import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from "@/components/Loader";


//@ts-ignore
const Computers = ({ isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  

  return (
    <mesh>
      <hemisphereLight intensity={150.15} groundColor='#8E59FF' />
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
        scale={isMobile ? 1.4 : 2}
        position={isMobile ? [0, -3, -2.2] : [0, -1.25, -1.5]}
        rotation={isMobile ? [0, 1.1, 0] :[0, 0.5, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
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
    <div className="absolute lg:left-80 lg:mt-0 -left-32 -mt-64 h-full w-full ">
      <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [17, 9, 7], fov: 28 }}
      gl={{ preserveDrawingBuffer: true }}
      className="z-[20]"
    >
      <Suspense fallback={<CanvasLoader />}>
      {isMobile ? (
        ''
      ) : (
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      )}
        <Computers isMobile={isMobile}  />
      </Suspense>

      <Preload all />
    </Canvas>
    </div>
    
  );
};

export default ComputersCanvas;
