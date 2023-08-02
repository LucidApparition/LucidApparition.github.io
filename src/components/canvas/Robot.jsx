import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Robot = () => {
  const robot = useGLTF('./robot/scene.gltf')

  return (
    
    <primitive 
        object={robot.scene}
        scale={0.03}
        position-y={-1}
        rotation-y={-1}
    />
       
  )
}

const RobotCanvas = () => {
  return (
    <Canvas 
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true}}
      camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [-5, 15, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
        <Robot />
        <pointLight position={[0, 10, 0]} intensity={5} color="#fff" />
      </Suspense>
    </Canvas>
  )
}

export default RobotCanvas;