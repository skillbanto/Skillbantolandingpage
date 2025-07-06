// Deployment configuration for SkillBanto
module.exports = {
  // Build configuration
  build: {
    // Use CommonJS format for Node.js compatibility
    format: 'cjs',
    platform: 'node',
    // Build frontend
    frontend: {
      command: 'npx vite build',
      outputDir: 'dist/public'
    },
    // Build backend
    backend: {
      command: 'esbuild server/production.js --platform=node --packages=external --bundle --format=cjs --outfile=dist/index.js',
      outputFile: 'dist/index.js'
    }
  },
  
  // Server configuration
  server: {
    // Port configuration - use environment variable or default to 5000
    port: process.env.PORT || 5000,
    // Bind to all interfaces for deployment compatibility
    host: '0.0.0.0',
    // Static file serving
    static: {
      publicDir: 'dist/public',
      assetsDir: 'dist/attached_assets'
    }
  },
  
  // Environment configuration
  environment: {
    NODE_ENV: 'production',
    // Add any other required environment variables
  },
  
  // Deployment commands
  commands: {
    build: 'bash build-deployment.sh',
    start: 'cd dist && node index.js',
    deploy: 'npm run build && npm start'
  }
};