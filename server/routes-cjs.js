// CommonJS version of routes for production deployment
const express = require('express');

function registerRoutes(app) {
  // Basic API test route
  app.get('/api/test', (req, res) => {
    res.json({ 
      message: 'SkillBanto API is working',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'production'
    });
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ 
      status: 'healthy',
      service: 'skillbanto-api',
      uptime: process.uptime()
    });
  });

  // Fallback for any other API routes
  app.use('/api/*', (req, res) => {
    res.status(404).json({ 
      error: 'API endpoint not found',
      path: req.path,
      method: req.method
    });
  });

  return app;
}

module.exports = { registerRoutes };