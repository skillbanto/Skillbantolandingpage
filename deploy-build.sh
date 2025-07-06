#!/bin/bash
set -e

echo "=== SkillBanto Full React Deployment Build ==="

# Clean previous builds
rm -rf dist
mkdir -p dist/public

# Set memory options for large React build
export NODE_OPTIONS="--max-old-space-size=8192"

# Build React app
echo "Building React application (1900+ modules)..."
npx vite build --config vite.prod.config.ts

# Build production server
echo "Building production server..."
esbuild server/production.ts --platform=node --packages=external --bundle --format=esm --outfile=dist/index.js

# Copy attached assets to dist
echo "Copying attached assets..."
cp -r attached_assets dist/

# Create package.json for deployment
cat > dist/package.json << 'EOF'
{
  "name": "skillbanto-production",
  "type": "module",
  "scripts": {
    "start": "node index.js"
  }
}
EOF

# Verify build
echo "=== Build Complete ==="
echo "React app: $(find dist/public -name "*.js" | wc -l) JS files"
echo "Server: dist/index.js"
echo "Assets: $(find dist/attached_assets -type f | wc -l) files"

# Create deployment marker
echo "FULL_REACT_APP_READY" > dist/.deployment-type