import * as THREE from "three";

export const createNeonMaterial = (
  color: string | number = 0x8b5cf6, 
  glowIntensity: number = 1.5
) => {
  const neonColor = new THREE.Color(color);
  
  // Create material using custom shader
  const neonMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: neonColor },
      glowIntensity: { value: glowIntensity },
      time: { value: 0 }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform float glowIntensity;
      uniform float time;
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      
      void main() {
        // Calculate fresnel effect (glow on edges)
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.0);
        
        // Add subtle pulsing based on time
        float pulse = 0.9 + 0.1 * sin(time * 2.0);
        
        // Calculate final glow
        float glow = fresnel * glowIntensity * pulse;
        
        // Mix color with glow
        vec3 finalColor = color * (1.0 + glow * 0.5);
        
        // Add more intensity to the center
        float center = 1.0 - 2.0 * length(vUv - 0.5);
        center = max(0.0, center);
        
        finalColor += color * center * 0.5;
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide
  });
  
  // Method to update animation time
  const updateTime = (time: number) => {
    neonMaterial.uniforms.time.value = time;
  };
  
  return { material: neonMaterial, updateTime };
};

export const createNeonEdgeMaterial = (
  color: string | number = 0x8b5cf6,
  thickness: number = 0.02
) => {
  const edgeColor = new THREE.Color(color);
  
  // Create material for edges
  const edgeMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: edgeColor },
      thickness: { value: thickness },
      time: { value: 0 }
    },
    vertexShader: `
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform float thickness;
      uniform float time;
      varying vec2 vUv;
      
      void main() {
        // Calculate distance from edge
        float distFromEdge = min(
          min(vUv.x, 1.0 - vUv.x),
          min(vUv.y, 1.0 - vUv.y)
        );
        
        // Create edge with smooth transition
        float edge = smoothstep(0.0, thickness, distFromEdge);
        
        // Add pulsing effect
        float pulse = 0.8 + 0.2 * sin(time * 3.0);
        
        // Final color with glow
        vec3 finalColor = color * (1.0 - edge) * pulse;
        float alpha = (1.0 - edge);
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide
  });
  
  // Method to update animation time
  const updateTime = (time: number) => {
    edgeMaterial.uniforms.time.value = time;
  };
  
  return { material: edgeMaterial, updateTime };
};
