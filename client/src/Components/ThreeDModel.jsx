import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

const Model = ({ path }) => {
  // useGLTF carrega o modelo 3D
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={1} />;
};

const ThreeDModel = () => {
  return (
    <Canvas shadows camera={{ position: [0, 1, 5], fov: 50 }}>
      {/* Iluminação */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />

      {/* Carregando o modelo 3D e aplicando o environment map */}
      <Suspense fallback={null}>
        <Model path="/Models/blue_fish.glb" />
        
        {/* Environment map para reflexos */}
        <Environment
          files="/Textures/environment_map.hdr" // Caminho para o arquivo HDR
          background
        />
      </Suspense>

      {/* Controles orbitais para movimentar a câmera ao redor do modelo */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDModel;