import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Scene = () => {
  let tex = useTexture("./new.png");
  tex.needsUpdate = true;

  let cly = useRef(null);
  useFrame((state, delta) => {
    cly.current.rotation.y += delta * 0.2;
    // cly.current.rotation.+=1;
  });


  return (
    <group rotation={[-0.2, 0.2, -0.3]}>
      <mesh ref={cly}>
        <cylinderGeometry args={[1.5, 1.5, 1.8, 70, 70, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};
export default Scene;
