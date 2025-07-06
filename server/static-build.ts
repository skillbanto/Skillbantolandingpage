import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve the React app from the client directory for deployment
app.use(express.static(path.join(__dirname, '../client/dist')));

// Serve static assets
app.use('/assets', express.static(path.join(__dirname, '../attached_assets')));

// For React Router - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});