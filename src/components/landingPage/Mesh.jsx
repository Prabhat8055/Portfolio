import { Canvas } from "@react-three/fiber";
import "./mesh.css";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scean";

const Mesh = () => {
  return (
    <>
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">Hello Iam </p>

          <ul className="content__container__list">
            <li className="content__container__list__item">Prabhat !</li>
            <li className="content__container__list__item">Frontend </li>
            <li className="content__container__list__item">Developer</li>
            <li className="content__container__list__item">😊❌💼</li>
          </ul>
        </div>
      </div>

      {/* Fixed Canvas container */}
      <div style={{ height: "650px", pointerEvents: "auto" }}>
        <Canvas camera={{ fov: 45 }}>
          <OrbitControls
            minDistance={4}
            maxDistance={10}
            enablePan={false}
            enableZoom={false}
          />
          {/* <ambientLight intensity={1.8} />
          <directionalLight intensity={3.4} position={[12, 20, 5]} /> */}
          <ambientLight intensity={2.2} />
          <directionalLight intensity={4.2} position={[20, 15, 1]} />

          <Scene />
        </Canvas>

        {/* <div> */}
        <marquee className="marquee" direction="left">
          <div className="box">
            <h1>
              &quot;Revolutionizing the web: innovative frontend, powerful
              backend, and transformative technologies shaping tomorrow&#39;s
              digital world!&quot;
            </h1>
          </div>
        </marquee>
      </div>
    </>
  );
};

export default Mesh;
