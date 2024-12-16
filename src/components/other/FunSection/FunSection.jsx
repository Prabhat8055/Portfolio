import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import "./FunSection.css";

const CubeFace = ({ position, rotation, text }) => (
  <mesh position={position} rotation={rotation}>
    <boxGeometry args={[3, 3, 0.5]} />
    <meshStandardMaterial color="#2C3539" />
    <Text
      position={[0, 0, 0.5]}
      fontSize={0.3}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  </mesh>
);

const SpinningCube = () => {
  const cubeRef = useRef();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={cubeRef}>
      {/* Six faces of the cube with skill/project names */}
      <CubeFace position={[0, 0, 1.25]} text="ReactJS" />
      <CubeFace
        position={[0, 0, -1.25]}
        rotation={[Math.PI, 0, 0]}
        text="FastAPI"
      />
      <CubeFace
        position={[1.25, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        text="Three.js"
      />
      <CubeFace
        position={[-1.25, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        text="Python"
      />
      <CubeFace
        position={[0, 1.25, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        text="Machine Learning"
      />
      <CubeFace
        position={[0, -1.25, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        text="Portfolio"
      />
    </group>
  );
};

const FunSection = () => (
  <div className="fun-section">
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SpinningCube />
      <OrbitControls enableRotate={true} />
    </Canvas>
  </div>
);

export default FunSection;
