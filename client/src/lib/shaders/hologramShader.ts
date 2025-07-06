import * as THREE from "three";

export const createHologramMaterial = (
  color: string | number = 0x22d3ee,
  linesColor: string | number = 0x6366f1,
  opacity: number = 0.7,
  scanlineSpeed: number = 1
) => {
  const baseColor = new THREE.Color(color);
  const lineColor = new THREE.Color(linesColor);
  
  // Create material with hologram effect
  const hologramMaterial = new THREE.ShaderMaterial({
    uniforms: {
      baseColor: { value: baseColor },
      lineColor: { value: lineColor },
      opacity: { value: opacity },
      time: { value: 0 },
      scanlineSpeed: { value: scanlineSpeed }
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
      uniform vec3 baseColor;
      uniform vec3 lineColor;
      uniform float opacity;
      uniform float time;
      uniform float scanlineSpeed;
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      
      // Hash function for random noise
      float hash(float n) {
        return fract(sin(n) * 43758.5453);
      }
      
      // Noise function
      float noise(vec2 p) {
        vec2 ip = floor(p);
        vec2 fp = fract(p);
        fp = fp * fp * (3.0 - 2.0 * fp);
        
        float n = ip.x + ip.y * 57.0;
        
        float a = hash(n);
        float b = hash(n + 1.0);
        float c = hash(n + 57.0);
        float d = hash(n + 58.0);
        
        return mix(
          mix(a, b, fp.x),
          mix(c, d, fp.x),
          fp.y
        );
      }
      
      void main() {
        // Scanlines effect
        float scanline = 0.5 + 0.5 * sin((vUv.y * 100.0) + time * scanlineSpeed);
        scanline = pow(scanline, 8.0) * 0.5;
        
        // Flickering effect
        float flicker = noise(vec2(time * 5.0, 0.0)) * 0.1 + 0.9;
        
        // Fresnel effect (stronger on edges)
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 2.0);
        
        // Edge glow
        float edge = smoothstep(0.3, 0.7, fresnel);
        
        // Combine effects
        vec3 finalColor = mix(baseColor, lineColor, scanline + edge * 0.3) * flicker;
        
        // Add some random "glitches"
        float glitch = step(0.98, noise(vec2(time * 10.0, vUv.y * 100.0)));
        finalColor = mix(finalColor, lineColor, glitch * 0.5);
        
        // Horizontal lines
        float lines = step(0.95, fract(vUv.y * 100.0 + time));
        finalColor += lineColor * lines * 0.5;
        
        // Final opacity with fresnel
        float finalOpacity = opacity * (0.7 + 0.3 * fresnel + lines * 0.5);
        
        gl_FragColor = vec4(finalColor, finalOpacity);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide
  });
  
  // Method to update animation time
  const updateTime = (time: number) => {
    hologramMaterial.uniforms.time.value = time;
  };
  
  return { material: hologramMaterial, updateTime };
};

export const createHolographicTextMaterial = (
  color: string | number = 0x22d3ee,
  glowColor: string | number = 0x6366f1,
  pulseSpeed: number = 1
) => {
  const textColor = new THREE.Color(color);
  const textGlow = new THREE.Color(glowColor);
  
  // Create material for holographic text
  const textMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: textColor },
      glowColor: { value: textGlow },
      time: { value: 0 },
      pulseSpeed: { value: pulseSpeed }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform vec3 glowColor;
      uniform float time;
      uniform float pulseSpeed;
      
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        // Create pulse effect
        float pulse = 0.5 + 0.5 * sin(time * pulseSpeed);
        
        // Create edge glow
        float edge = smoothstep(0.1, 0.5, abs(vUv.x - 0.5) * 2.0);
        edge = max(edge, smoothstep(0.1, 0.5, abs(vUv.y - 0.5) * 2.0));
        
        // Create scan line
        float scanLine = step(0.98, fract(vUv.y * 20.0 - time * 0.5));
        
        // Mix colors based on effects
        vec3 finalColor = mix(color, glowColor, edge * 0.5 + scanLine);
        
        // Add glow effect based on pulse
        finalColor += glowColor * pulse * 0.3;
        
        // Set final color with transparency on edges
        gl_FragColor = vec4(finalColor, 1.0 - edge * 0.5);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide
  });
  
  // Method to update animation time
  const updateTime = (time: number) => {
    textMaterial.uniforms.time.value = time;
  };
  
  return { material: textMaterial, updateTime };
};
