const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

// Load environment variables
dotenv.config();

// Connect to MongoDB Database
connectDB();

const app = express();

// Configure CORS - allows local development and scalable production urls
app.use(cors({
  origin: '*', // For production you can restrict this to your specific deployment URL
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

// Body parser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Public REST API routes mapping
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));

// Root healthcheck node
app.get('/', (req, res) => {
  res.json({ message: 'Simplified Public AI-Themed Portfolio API is running smoothly.' });
});

// Error handling middleware
app.use(errorHandler);

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 5000;

function startServer(port, attempts = 0) {
  const server = app.listen(port, () => {
    console.log(`Server executing in simplified public environment on port ${port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && attempts < 10) {
      console.warn(`Port ${port} in use, trying ${port + 1}...`);
      setTimeout(() => startServer(port + 1, attempts + 1), 200);
    } else {
      console.error(err);
      process.exit(1);
    }
  });
}

startServer(DEFAULT_PORT);
