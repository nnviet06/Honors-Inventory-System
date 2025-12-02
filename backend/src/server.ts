import express from 'express';
import cors from 'cors';
import equipmentRoutes from './equipment';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', equipmentRoutes);

// Health check
app.get('/', (req, res) => {
    res.json({ message: 'Honors Inventory API is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});