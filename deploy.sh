#!/bin/bash
set -e

echo "=== SkillBanto Production Deployment ==="

# Clean previous builds
rm -rf dist
mkdir -p dist/public dist/attached_assets

# Set memory options for large React build
export NODE_OPTIONS="--max-old-space-size=8192"

# Build React frontend with production config
echo "Building React application..."
npx vite build --config vite.prod.config.ts

# Copy React build output to dist/public
echo "Copying React build files..."
if [ -d "client/dist" ]; then
  cp -r client/dist/* dist/public/
else
  echo "ERROR: React build output not found"
  exit 1
fi

# Copy attached assets
if [ -d "attached_assets" ]; then
  echo "Copying attached assets..."
  cp -r attached_assets/* dist/attached_assets/
else
  echo "Creating empty assets directory..."
  mkdir -p dist/attached_assets
fi

# Copy CommonJS routes
echo "Copying API routes..."
cp server/routes-cjs.js dist/

# Build CommonJS server for deployment
echo "Building production server..."
esbuild server/production.js --platform=node --packages=external --bundle --format=cjs --outfile=dist/index.js --target=node18

# Create production package.json (CommonJS compatible)
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

echo "✅ Full production build complete"
echo "🚀 Ready for deployment"
echo "📝 Build includes:"
echo "   - React application (built)"
echo "   - CommonJS server"
echo "   - API routes"
echo "   - Static assets"
echo ""
echo "🔧 Deployment commands:"
echo "   Port: 5000 (configured for external port 80)"
echo "   Start: NODE_ENV=production node index.js"