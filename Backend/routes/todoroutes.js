const express = require('express');
const router = express.Router();
// const Todo = require('../routes/todoroutes');
const   Todo = require ("../models/Todo")


// Create a new to-do
router.post('/todos', async (req, res) => {
    const { title, startDate, endDate } = req.body;

    const newTodo = new Todo({
        title,
        startDate,
        endDate
    });

    try {
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all to-dos
router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        console.log(todos);
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a to-do
router.put('/todos/:id', async (req, res) => {
    const { title, startDate, endDate } = req.body;

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
            title,
            startDate,
            endDate
        }, { new: true });

        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
