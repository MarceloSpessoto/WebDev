const express = require('express');
const app = express();


app.use(express.json());
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "default-src 'self'");
    return next();
});


const data = [
                {
                    tarefa:"Programar aplicação ToDo",
                    status:true
                },
                {
                    tarefa:"Estudar para prova",
                    status:false
                },
                {
                    tarefa:"Fazer EP",
                    status:true
                }
            ];

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
    res.json({tarefa: false});
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

app.delete('/tarefas', (req, res) => {
    data = []
})