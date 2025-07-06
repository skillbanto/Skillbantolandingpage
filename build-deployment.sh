#!/bin/bash
set -e

echo "=== Building SkillBanto for Deployment ==="

# Clean previous builds
rm -rf dist
mkdir -p dist/public

# Set memory options for React build
export NODE_OPTIONS="--max-old-space-size=8192"

# Build React frontend
echo "Building React frontend..."
npx vite build

# Copy build output to dist/public
cp -r client/dist/* dist/public/

# Copy CommonJS routes to dist
echo "Copying CommonJS routes..."
cp server/routes-cjs.js dist/

# Build CommonJS server for deployment
echo "Building production server (CommonJS format)..."
esbuild server/production.js --platform=node --packages=external --bundle --format=cjs --outfile=dist/index.js

# Copy attached assets
if [ -d "attached_assets" ]; then
  echo "Copying attached assets..."
  cp -r attached_assets dist/
fi

# Create production package.json
cat > dist/package.json << 'EOF'
{
  "name": "skillbanto-production",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
EOF

# Verify build structure
echo "=== Build Verification ==="
echo "Server bundle: dist/index.js"
echo "React app files: $(find dist/public -name "*.js" -o -name "*.css" | wc -l)"
if [ -d "dist/attached_assets" ]; then
  echo "Assets: $(find dist/attached_assets -type f | wc -l) files"
fi

echo "✅ Deployment build complete!"
echo "The server is configured to:"
echo "  - Listen on PORT environment variable (defaults to 5000)"
echo "  - Bind to 0.0.0.0 for proper deployment"
echo "  - Serve React app from /dist/public"
echo "  - Handle API routes via /api/*"
echo "  - Serve assets from /assets/*"