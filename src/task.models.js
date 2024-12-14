const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Task = sequelize.define('Task', {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pendiente', 'completada', 'pospuesta'),
        defaultValue: 'pendiente',
    },
    createdBy: {
        type: DataTypes.STRING,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Task;
