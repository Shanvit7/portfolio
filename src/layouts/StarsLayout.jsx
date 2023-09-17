import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const StarsLayout = ({}) => {
  return (
        <Canvas style={{ overflow: 'auto',position: 'fixed', width: '99vw' }}>
          <OrbitControls enableRotate={false} autoRotate={true} />
          <Stars />
        </Canvas>
  );
};

export default StarsLayout;
