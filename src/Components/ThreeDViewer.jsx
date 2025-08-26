import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
}

export default function ThreeDViewer({ modelPath }) {
  return (
    <Canvas style={{ height: '400px' }}>
      <ambientLight />
      <Stage>
        <Model modelPath={modelPath} />
      </Stage>
      <OrbitControls />
    </Canvas>
  );
}
// This component uses react-three-fiber to render a 3D model in a canvas. It imports the model using useGLTF from drei and allows for orbit controls to rotate around the model. The Stage component provides a nice environment for the model.