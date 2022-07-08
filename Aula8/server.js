const express = require('express');
const app = express();

const data = ["Programar aplicação ToDo", "Estudar para prova", "Fazer EP"];

app.listen(3000, () => {
    console.log("ToDo List");
})

app.get('/tarefas', (req, res) => {
    res.send(data);
})

app.get('/tarefas/:id', (req, res) => {
    const {id} = req.params;
    if (id >= data.length) res.status(404);
    res.json(data[id]);
})

app.post('/tarefas', (req, res) => {
    const tarefa = req.body;
    data.push(tarefa);
    res.status(201);
    res.json(tarefa);
})

app.put('/tarefas', (req, res) => {
    data = req.body;
})

app.put('/tarefas/:id', (req, res) => {
    const {id} = req.params;
    if (id >= data.length) res.status(404);
    else data[id] = req.body;
})

app.delete('/tarefas/:id', (req, res) => {
    const {id} = req.params;
    if(id >= data.lengt) res.status(404);
    else data = data.splice(id, 1);
})