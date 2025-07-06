import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { registerRoutes } from './routes';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register API routes
registerRoutes(app);

// Serve static files
const publicPath = path.join(__dirname, 'public');
const assetsPath = path.join(__dirname, '../attached_assets');

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});