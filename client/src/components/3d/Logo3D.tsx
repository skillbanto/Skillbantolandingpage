import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function LogoCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color={hovered ? "#34d399" : "#10b981"} 
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}

function SphereLogo() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main sphere (S) */}
      <mesh position={[-1, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#10b981" 
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
      
      {/* Second sphere (B) */}
      <mesh position={[1, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#34d399" 
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export default function Logo3D() {
  return (
    <div className="h-64 w-64 mx-auto">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <SphereLogo />
      </Canvas>
    </div>
  );
}