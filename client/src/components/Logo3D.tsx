import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import { gsap } from "gsap";

const Logo3D = ({ position = [0, 0, 0], scale = 1 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  // Material for the main text
  const textMaterial = useRef(
    new THREE.MeshStandardMaterial({
      color: new THREE.Color("#f5f5f5"),
      metalness: 0.8,
      roughness: 0.2,
      emissive: new THREE.Color("#8b5cf6"),
      emissiveIntensity: 0.5,
    })
  );
  
  // Material for the glow effect
  const glowMaterial = useRef(
    new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color("#8b5cf6") },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color;
        varying vec2 vUv;
        
        void main() {
          float intensity = 0.7 + 0.3 * sin(time * 2.0);
          vec3 glow = color * intensity;
          
          // Create a radial gradient for the glow
          float dist = length(vUv - 0.5) * 2.0;
          float alpha = smoothstep(1.0, 0.0, dist) * 0.6;
          
          gl_FragColor = vec4(glow, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    })
  );

  // Animation on mount
  useEffect(() => {
    if (groupRef.current) {
      // Initial state
      gsap.set(groupRef.current.position, { 
        y: position[1] - 2,
        z: position[2] - 5
      });
      
      // Animate in
      gsap.to(groupRef.current.position, {
        y: position[1],
        z: position[2],
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5
      });
      
      // Rotate slightly
      gsap.to(groupRef.current.rotation, {
        y: Math.PI * 0.05,
        duration: 2,
        ease: "power2.inOut"
      });
    }
    
    if (textRef.current) {
      // Animate material properties
      gsap.to(textMaterial.current, {
        emissiveIntensity: 1,
        duration: 2,
        ease: "power2.out",
        delay: 1
      });
    }
  }, [position]);

  // Animation loop
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1;
      
      // Subtle rotation
      groupRef.current.rotation.y = Math.PI * 0.05 + Math.sin(time * 0.2) * 0.05;
    }
    
    if (glowRef.current) {
      // Update glow shader time
      (glowRef.current.material as THREE.ShaderMaterial).uniforms.time.value = time;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Glow effect behind the text */}
      <mesh ref={glowRef} position={[0, 0, -0.1]} scale={[1.2, 1.2, 1.2]}>
        <planeGeometry args={[6, 1.5]} />
        <primitive object={glowMaterial.current} attach="material" />
      </mesh>
      
      {/* Main 3D text */}
      <Center>
        <Text3D
          ref={textRef}
          font="/fonts/inter.json"
          size={0.8}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={5}
          material={textMaterial.current}
        >
          SkillBanto
        </Text3D>
      </Center>
    </group>
  );
};

export default Logo3D;
