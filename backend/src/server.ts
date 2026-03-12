import express from 'express';
import apiApp from './api/index';

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/', apiApp);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'AETHER backend (src)' });
});

app.listen(port, () => {
  console.log(`AETHER backend (src) running on port ${port}`);
});
