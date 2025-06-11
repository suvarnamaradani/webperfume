const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const productRoutes = require('./routes/products');
const collectionRoutes = require('./routes/collections');
const contactRoutes = require('./routes/contact');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/perfume_paradise', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/contact', contactRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Perfume Paradise API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 