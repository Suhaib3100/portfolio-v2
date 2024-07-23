import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

export const StarBackground = (props: any) => {
  const ref: any = useRef();
  const initialRadius = 0.1; // Start with a small radius
  const maxRadius = 1.2; // Maximum radius
  const duration = 2000; // 2 seconds
  const [radius, setRadius] = useState(initialRadius);
  const [positions, setPositions] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: initialRadius }),
  );

  useEffect(() => {
    const startTime = performance.now();

    const animateRadius = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newRadius = initialRadius + progress * (maxRadius - initialRadius);

      // Update positions with the new radius
      let newPositions = random.inSphere(new Float32Array(5000), {
        radius: newRadius,
      });

      // Adjust y-coordinates to move from bottom to top
      for (let i = 1; i < newPositions.length; i += 3) {
        newPositions[i] = newPositions[i] * progress; // Scale y-coordinates by progress
      }

      setRadius(newRadius);
      setPositions(newPositions);

      if (progress < 1) {
        requestAnimationFrame(animateRadius);
      }
    };

    requestAnimationFrame(animateRadius);
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="$fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
