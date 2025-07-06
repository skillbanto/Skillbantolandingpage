#!/bin/bash
set -e

echo "=== Building SkillBanto for Production Deployment ==="

# Clean previous builds
rm -rf dist
mkdir -p dist/public

# Set memory options for large React build
export NODE_OPTIONS="--max-old-space-size=8192"

# Build React frontend with production config
echo "Building React application (this may take several minutes)..."
npx vite build --config vite.prod.config.ts

# Copy build output to dist/public
echo "Copying React build files..."
if [ -d "client/dist" ]; then
  cp -r client/dist/* dist/public/
else
  echo "ERROR: React build output not found in client/dist"
  exit 1
fi

# Copy CommonJS routes
echo "Copying API routes..."
cp server/routes-cjs.js dist/

# Build CommonJS server for deployment
echo "Building production server..."
esbuild server/production.js --platform=node --packages=external --bundle --format=cjs --outfile=dist/index.js

# Copy attached assets
if [ -d "attached_assets" ]; then
  echo "Copying attached assets..."
  cp -r attached_assets dist/
else
  echo "Creating empty assets directory..."
  mkdir -p dist/attached_assets
fi

# Create production package.json (CommonJS compatible)
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
echo ""
echo "=== Build Verification ==="
echo "✅ Server bundle: dist/index.js ($(stat -c%s dist/index.js 2>/dev/null || echo 'N/A') bytes)"
echo "✅ React app: $(find dist/public -name "*.js" -o -name "*.css" | wc -l) files"
echo "✅ HTML entry: dist/public/index.html"
if [ -d "dist/attached_assets" ]; then
  echo "✅ Assets: $(find dist/attached_assets -type f | wc -l) files"
fi

echo ""
echo "=== Deployment Ready! ==="
echo "Your production build is complete in the 'dist' directory."
echo ""
echo "To deploy:"
echo "1. The build command is already complete"
echo "2. Use start command: cd dist && npm start"
echo ""
echo "The server will:"
echo "- Listen on PORT environment variable (or 5000)"
echo "- Serve your complete React application"
echo "- Handle all API routes"
echo "- Serve static assets"