import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleField() {
  const ref = useRef<any>();
  // Reduced radius and increased number of points for better visibility
  const sphere = random.inSphere(new Float32Array(2000), { radius: 1.2, radius0: 1 });

  useFrame((state, delta) => {
    if (ref.current) {
      // Slowed down the rotation for smoother animation
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.005} // Increased point size for better visibility
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8} // Added opacity for better visual effect
        />
      </Points>
    </group>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}