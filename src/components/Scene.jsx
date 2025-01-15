import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { OrbitControls, Stage } from "@react-three/drei";
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
  Vignette,
} from "@react-three/postprocessing";

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
      <Stage adjustCamera={false} />
      <Experience />
      <OrbitControls enableZoom={false} />
      <EffectComposer>
        <Bloom intensity={2} luminanceThreshold={1} />
        <BrightnessContrast brightness={0} contrast={0.2} />
        <Vignette darkness={0.3} />
      </EffectComposer>
    </Canvas>
  );
};

export default Scene;
