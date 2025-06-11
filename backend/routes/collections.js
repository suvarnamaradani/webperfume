const express = require('express');
const router = express.Router();
const Collection = require('../models/Collection');

// Get all collections
router.get('/', async (req, res) => {
    try {
        const collections = await Collection.find().populate('products');
        res.json(collections);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get single collection
router.get('/:id', async (req, res) => {
    try {
        const collection = await Collection.findById(req.params.id).populate('products');
        if (!collection) {
            return res.status(404).json({ message: 'Collection not found' });
        }
        res.json(collection);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create collection
router.post('/', async (req, res) => {
    const collection = new Collection({
        name: req.body.name,
        description: req.body.description,
        products: req.body.products
    });

    try {
        const newCollection = await collection.save();
        res.status(201).json(newCollection);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update collection
router.patch('/:id', async (req, res) => {
    try {
        const collection = await Collection.findById(req.params.id);
        if (!collection) {
            return res.status(404).json({ message: 'Collection not found' });
        }

        if (req.body.name) collection.name = req.body.name;
        if (req.body.description) collection.description = req.body.description;
        if (req.body.products) collection.products = req.body.products;

        const updatedCollection = await collection.save();
        res.json(updatedCollection);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete collection
router.delete('/:id', async (req, res) => {
    try {
        const collection = await Collection.findById(req.params.id);
        if (!collection) {
            return res.status(404).json({ message: 'Collection not found' });
        }

        await collection.remove();
        res.json({ message: 'Collection deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 