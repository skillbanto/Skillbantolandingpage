#!/bin/bash
set -e

echo "=== Quick Deployment Test ==="

# Clean and create minimal dist structure
rm -rf dist
mkdir -p dist/public

# Create a simple index.html for testing
cat > dist/public/index.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <title>SkillBanto - Deployment Test</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>SkillBanto Deployment Test</h1>
    <p>Server is running correctly!</p>
    <script>
        // Test API connectivity
        fetch('/api/test')
            .then(res => res.json())
            .then(data => {
                document.body.innerHTML += '<p>API Test: ' + JSON.stringify(data) + '</p>';
            })
            .catch(err => {
                document.body.innerHTML += '<p>API Error: ' + err.message + '</p>';
            });
    </script>
</body>
</html>
EOF

# Copy CommonJS routes
cp server/routes-cjs.js dist/

# Build production server with CommonJS format
echo "Building production server (CommonJS)..."
esbuild server/production.js --platform=node --packages=external --bundle --format=cjs --outfile=dist/index.js

# Copy attached assets if they exist
if [ -d "attached_assets" ]; then
  cp -r attached_assets dist/
fi

# Create production package.json (no ES modules)
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

echo "✅ Quick deployment build complete!"
echo "Testing server locally..."

# Test the server
cd dist
echo "Starting server on port 5000..."
timeout 10 node index.js &
SERVER_PID=$!

sleep 3

# Test if server is responding
if curl -f http://localhost:5000/api/test > /dev/null 2>&1; then
    echo "✅ Server API test successful!"
else
    echo "❌ Server API test failed"
fi

if curl -f http://localhost:5000/ > /dev/null 2>&1; then
    echo "✅ Server frontend test successful!"
else
    echo "❌ Server frontend test failed"
fi

# Clean up
kill $SERVER_PID 2>/dev/null || true

echo "=== Test Complete ==="