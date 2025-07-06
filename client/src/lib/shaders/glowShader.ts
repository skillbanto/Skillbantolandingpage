import * as THREE from "three";

export const createGlowMaterial = (
  color: string | number = 0x6366f1,
  intensity: number = 1.5,
  power: number = 2.0
) => {
  const glowColor = new THREE.Color(color);
  
  // Create material with glow effect
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: glowColor },
      intensity: { value: intensity },
      power: { value: power },
      time: { value: 0 }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vec4 mvPosition = viewMatrix * worldPosition;
        vViewPosition = -mvPosition.xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform float intensity;
      uniform float power;
      uniform float time;
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      
      void main() {
        // Calculate view direction
        vec3 viewDir = normalize(vViewPosition);
        
        // Calculate fresnel effect (strength based on viewing angle)
        float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), power);
        
        // Add pulsing effect
        float pulse = 0.8 + 0.2 * sin(time * 2.0);
        
        // Calculate final glow intensity
        float glowIntensity = fresnel * intensity * pulse;
        
        // Calculate final color
        vec3 finalColor = color * glowIntensity;
        
        // Set final color with transparency based on glow
        gl_FragColor = vec4(finalColor, glowIntensity);
      }
    `,
    transparent: true,
    depthWrite: false,
    side: THREE.FrontSide,
    blending: THREE.AdditiveBlending
  });
  
  // Method to update animation time
  const updateTime = (time: number) => {
    glowMaterial.uniforms.time.value = time;
  };
  
  return { material: glowMaterial, updateTime };
};

export const createButtonGlowMaterial = (
  colors: (string | number)[] = [0x6366f1, 0x06b6d4, 0xd946ef],
  speed: number = 1.0
) => {
  // Convert colors to THREE.Color objects
  const threeColors = colors.map(color => new THREE.Color(color));
  
  // Create material for glowing buttons
  const buttonMaterial = new THREE.ShaderMaterial({
    uniforms: {
      colors: { value: threeColors },
      colorCount: { value: threeColors.length },
      time: { value: 0 },
      speed: { value: speed }
    },
    vertexShader: `
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 colors[3]; // Fixed array size (adjust if needed)
      uniform int colorCount;
      uniform float time;
      uniform float speed;
      
      varying vec2 vUv;
      
      void main() {
        // Create movement
        float movement = (vUv.x + time * speed) * colorCount;
        
        // Get indices of the two colors to mix
        int index1 = int(floor(movement)) % colorCount;
        int index2 = (index1 + 1) % colorCount;
        
        // Calculate mix factor
        float mixFactor = fract(movement);
        
        // Smooth the transition
        mixFactor = smoothstep(0.0, 1.0, mixFactor);
        
        // Mix the two colors
        vec3 color1 = index1 < colorCount ? colors[index1] : vec3(1.0);
        vec3 color2 = index2 < colorCount ? colors[index2] : vec3(1.0);
        vec3 finalColor = mix(color1, color2, mixFactor);
        
        // Create edge glow
        float edgeX = smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x);
        float edgeY = smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
        float edge = edgeX * edgeY;
        
        // Add pulsing
        float pulse = 0.8 + 0.2 * sin(time * 3.0);
        
        // Final color with glow
        finalColor *= edge * pulse * 1.5;
        
        gl_FragColor = vec4(finalColor, edge * 0.8);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  });
  
  // Method to update animation time
  const updateTime = (time: number) => {
    buttonMaterial.uniforms.time.value = time;
  };
  
  return { material: buttonMaterial, updateTime };
};
