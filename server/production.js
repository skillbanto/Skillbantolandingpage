require('dotenv/config');
const express = require('express');
const path = require('path');

const app = express();

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import and register all API routes
try {
  const routes = require('./routes-cjs.js');
  if (routes.registerRoutes) {
    routes.registerRoutes(app);
    console.log('API routes registered successfully');
  }
} catch (error) {
  console.log('Using fallback API routes');
  // Fallback API test route
  app.get('/api/test', (req, res) => {
    res.json({ 
      message: 'SkillBanto API is working (fallback mode)',
      timestamp: new Date().toISOString()
    });
  });
  
  app.get('/api/health', (req, res) => {
    res.json({ 
      status: 'healthy',
      service: 'skillbanto-api',
      uptime: process.uptime()
    });
  });
}

// Serve static files
const publicPath = path.join(__dirname, 'public');
const assetsPath = path.join(__dirname, 'attached_assets');

// Log paths for debugging
console.log('Serving static files from:', publicPath);
console.log('Serving assets from:', assetsPath);

// Serve React build
app.use(express.static(publicPath));

// Serve attached assets
app.use('/assets', express.static(assetsPath));

// Handle React routing, return index.html for all non-API routes
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    const indexPath = path.join(publicPath, 'index.html');
    console.log('Serving index.html from:', indexPath);
    res.sendFile(indexPath);
  }
});

// Use environment PORT or default to 5000 for deployment compatibility
const PORT = process.env.PORT || 5000;

// Listen on 0.0.0.0 for proper deployment compatibility
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`SkillBanto server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'production'}`);
  console.log(`External port mapping: 5000 -> 80`);
  console.log(`Server bound to 0.0.0.0:${PORT}`);
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use`);
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});