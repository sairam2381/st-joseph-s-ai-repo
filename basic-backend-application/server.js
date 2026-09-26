import dotenv from 'dotenv';
import app from './src/app.js';
import { connectDB } from './src/config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`[Server] Express server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`[Server] API Health check available at: http://localhost:${PORT}/api/health`);
});
