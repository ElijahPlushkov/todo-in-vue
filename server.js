// Для развыертывания: npm init -y
// npm install express

// для запуска: node server.js
// Апи ручки:  http://localhost:8010/api/user/get-all или http://localhost:8010/api/todo/get-all

const express = require('express');
const app = express();

// Модели данных
const users = [
    {
        id: 1,
        name: 'Иван',
        lastName: 'Иванов',
        email: 'ivan@example.com',
        status: 'active',
        phone: '+7 (999) 123-45-67',
        roles: ['user'],
        createdAt: new Date()
    }
];

const todos = [
    {id: 1, name: "do", isDone: false, description: "longer text", subtasks: []},
    {id: 2, name: "make", isDone: true, description: "longer text", subtasks: []}
];

const cats = [
    {
        id: 1,
        name: "Dymok"
    },
    {
        id: 2,
        name: "Murzik"
    }
];

const shrektask = [
    {
        id: 1,
        name: "Rescue Princess Fiona",
        isDone: true,
        description: "Complete the quest to rescue the princess from the dragon",
        subtasks: [
            {
                subtaskName: "Find Donkey companion",
                subtaskExecutor: "Shrek",
                subtaskEstimatedTime: 30
            },
            {
                subtaskName: "Navigate through fire swamp",
                subtaskExecutor: "Shrek",
                subtaskEstimatedTime: 60
            }
        ]
    },
    {
        id: 2,
        name: "Deal with Lord Farquaad",
        isDone: false,
        description: "Confront the ruler of Duloc about fairy tale creatures",
        subtasks: []
    }
]

// Общий формат ответа API
const apiResponse = (success, errors, data) => ({
    success: success, // Boolean
    errors: errors || [], // Array
    data: data || [] // Array
});

// CORS-заголовки для всех маршрутов
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Маршрут: GET /api/user/get-all
app.get('/api/user/get-all', (req, res) => {
    res.json(apiResponse(true, [], users));
});

// Маршрут: GET /api/todo/get-all
app.get('/api/todo/get-all', (req, res) => {
    res.json(apiResponse(true, [], todos));
});

// Маршрут: GET /x
app.get('/x', (req, res) => {
    res.json(apiResponse(true, [], cats));
});

// Маршрут: GET /api/shrek/get-tasks
app.get('/api/shrek/get-tasks', (req, res) => {
    res.json(apiResponse(true, [], shrektask));
});

// Порт (как в Go-версии)
const PORT = 8010;
app.listen(PORT, () => {
    console.log(`Сервер запущен на :${PORT}`);
});
