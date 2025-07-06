import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, Plane, useTexture } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { glsl } from "vite-plugin-glsl";

const SkillBantoScene = () => {
  const { viewport } = useThree();
  const scroll = useScroll();
  const gridRef = useRef<THREE.Mesh>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);
  
  // Create grid material with custom shader
  const gridMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        scroll: { value: 0 },
        resolution: { value: new THREE.Vector2(1, 1) },
        color1: { value: new THREE.Color("#6366f1") },
        color2: { value: new THREE.Color("#06b6d4") }
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
        uniform float scroll;
        uniform vec2 resolution;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        
        float grid(vec2 uv, float size) {
          vec2 grid = fract(uv * size);
          return (step(0.98, grid.x) + step(0.98, grid.y)) * 0.5;
        }
        
        void main() {
          // Offset UVs based on scroll
          vec2 uv = vUv;
          uv.y += scroll * 0.1;
          
          // Create grid effect
          float gridLines = grid(uv, 20.0) * 0.5;
          
          // Create a larger grid that fades based on distance from center
          float largeGrid = grid(uv, 5.0) * 0.3;
          
          // Distance from center for vignette
          float dist = length(uv - 0.5) * 2.0;
          float vignette = 1.0 - dist * dist * 0.5;
          
          // Combine grids
          float gridPattern = (gridLines + largeGrid) * vignette;
          
          // Pulse effect based on time
          float pulse = 0.5 + 0.5 * sin(time * 0.5);
          
          // Mix colors based on UV position and pulse
          vec3 finalColor = mix(color1, color2, uv.y + pulse * 0.2);
          
          // Add some depth with alpha
          float alpha = gridPattern * 0.8 + 0.1;
          
          gl_FragColor = vec4(finalColor * gridPattern, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });
  }, []);

  // Update time uniform every frame
  useFrame((state) => {
    if (gridRef.current && gridRef.current.material) {
      (gridRef.current.material as THREE.ShaderMaterial).uniforms.time.value = state.clock.getElapsedTime();
      (gridRef.current.material as THREE.ShaderMaterial).uniforms.scroll.value = scroll.offset;
    }

    // Animate point light
    if (pointLightRef.current) {
      pointLightRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 5;
      pointLightRef.current.intensity = 2 + Math.sin(state.clock.getElapsedTime()) * 0.5;
    }

    // Animate spot light to follow scroll position
    if (spotLightRef.current) {
      spotLightRef.current.position.y = 5 - scroll.offset * 20;
      spotLightRef.current.lookAt(0, spotLightRef.current.position.y - 5, 0);
    }
  });

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      
      {/* Dynamic point light */}
      <pointLight 
        ref={pointLightRef} 
        position={[0, 2, 5]} 
        intensity={2} 
        color="#8b5cf6" 
      />
      
      {/* Spot light that follows scroll */}
      <spotLight
        ref={spotLightRef}
        position={[0, 5, 8]}
        angle={0.6}
        penumbra={0.5}
        intensity={1.5}
        color="#22d3ee"
        castShadow
      />
      
      {/* Grid floor */}
      <Plane 
        ref={gridRef}
        args={[100, 100, 20, 20]} 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -3, 0]}
        material={gridMaterial}
      />
      
      {/* Background fog */}
      <fog attach="fog" args={['#0f0f17', 10, 50]} />
      
      {/* Floating particles */}
      <Particles count={200} />
    </>
  );
};

// Component for creating floating particles
const Particles = ({ count = 100 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
      );
      const speed = 0.01 + Math.random() * 0.02;
      const rotationSpeed = 0.01 + Math.random() * 0.02;
      const scale = 0.05 + Math.random() * 0.1;
      temp.push({ position, speed, rotationSpeed, scale });
    }
    return temp;
  }, [count]);
  
  useFrame((state) => {
    if (mesh.current) {
      particles.forEach((particle, i) => {
        const { position, speed, rotationSpeed, scale } = particle;
        
        // Update position with time-based movement
        position.y += Math.sin(state.clock.getElapsedTime() * speed) * 0.01;
        position.x += Math.cos(state.clock.getElapsedTime() * speed) * 0.01;
        
        // Set transform
        dummy.position.copy(position);
        dummy.rotation.set(
          state.clock.getElapsedTime() * rotationSpeed,
          state.clock.getElapsedTime() * rotationSpeed * 0.7,
          0
        );
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        
        // Update instance
        mesh.current.setMatrixAt(i, dummy.matrix);
      });
      
      mesh.current.instanceMatrix.needsUpdate = true;
    }
  });
  
  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color="#8b5cf6" 
        emissive="#6366f1"
        emissiveIntensity={0.5}
        transparent
        opacity={0.7}
      />
    </instancedMesh>
  );
};

export default SkillBantoScene;
