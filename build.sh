#!/bin/bash
set -e

echo "=== Building SkillBanto for Deployment ==="

# Clean dist
rm -rf dist
mkdir -p dist/public

# Copy index.html for deployment detection
cp client/index.html dist/

# Build the production server with CommonJS format
echo "Building server..."
esbuild server/production.js --platform=node --packages=external --bundle --format=cjs --outfile=dist/index.js --target=node18

# Create production package.json for CommonJS compatibility (no "type": "module")
cat > dist/package.json << 'EOF'
{
  "name": "skillbanto-production",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "NODE_ENV=production node index.js"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
EOF

# Create a deployment instruction file
cat > dist/deploy-instructions.txt << 'INSTRUCTIONS'
This deployment requires building the React app on the deployment server.
The React app has 1900+ modules and needs deployment server resources.

Build command: npm run build:client
Start command: NODE_ENV=production node index.js
Port: 5000 (mapped to external port 80)

The server is configured to serve:
- React app from /dist/public
- API routes from /api/*
- Assets from /assets/*
INSTRUCTIONS

echo "✅ Deployment structure ready"
echo "CommonJS server built for production deployment"
echo "The React app will be built on deployment servers"
