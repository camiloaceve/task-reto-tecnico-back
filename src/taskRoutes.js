const express = require('express');
const Task = require('./task.models');
const router = express.Router();

// Crear una nueva tarea
router.post('/', async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Listar todas las tareas
router.get('/', async (req, res) => {
    const tasks = await Task.findAll({ where: { isDeleted: false } });
    res.json(tasks);
});

// Modificar una tarea
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.update(req.body, { where: { id: req.params.id } });
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Eliminar una tarea (lógica)
router.delete('/:id', async (req, res) => {
    try {
        await Task.update({ isDeleted: true }, { where: { id: req.params.id } });
        res.json({ message: 'Task deleted logically' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
