import React, { useRef } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

const ShootingStar = ({ position }) => {
  const starRef = useRef();

  useFrame(({ clock }) => {
    if (starRef.current) {
      starRef.current.position.x = position[0] + Math.sin(clock.elapsedTime) * 10;
      starRef.current.position.y = position[1] - clock.elapsedTime * 5;
    }
  });

  return (
    <mesh ref={starRef} position={position}>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

const StarsLayout = () => {
  const numStars = 60;
   const animateShootingStars = () => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * 25 - 10;
      const y = Math.random() * 25 + 10;
      const z = -10; 
      const position = [x, y, z];
      stars.push(<ShootingStar key={i} position={position} />);
    }
    return stars;
  };

  return (
    <Canvas style={{ overflow: 'auto', position: 'fixed', width: '99vw' }}>
      <OrbitControls enableRotate={false} autoRotate={true} />
      <ambientLight intensity={0.1} />
      <pointLight intensity={1} position={[10, 10, 10]} />
      <Stars />
      {animateShootingStars()}
    </Canvas>
  );
};

export default StarsLayout;
