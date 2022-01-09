//Importacao do express
const express = require('express');
const server = express();
const body = require('body-parser')


// para analisar o aplicativo / json
server.use(body.json()) 

//Essa funcao vai fazer o express reconhecer informacoes json
server.use(express.json()); 


const cafes = ['Espresso', 'Cappuccino', 'Irish coffee', 'Coffee latte', 'Macchiato', 'Mocha', 'Duplo'];


// Retorna uma linguagem
server.get('/cafes/:index', (req, res) => {
    const { index } = req.params

    return res.json(cafes[index]);
});


// Retornar todos as lingugagens
server.get('/cafes', (req, res) => {
    return res.json(cafes)
});


//Criar uma nova linguagem
server.post('/cafes', (req, res) =>{
    const { name } = req.body;
    cafes.push(name);

    return res.json(cafes);
})

//Atualizar uma lingugagem
server.put('/cafes/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body; 

    cafes[index] = name;

    return res.json(cafes)
})


//Vai excluir alguma linguaguem
server.delete('/cafes/:index', (req, res) => {
    const { index } = req.params;

    cafes.splice(index, 1);
    return res.json({ message: "O café foi deletado!"});
});





//Vai rodar nessa porta (pode ser qualquer porta de sua escolha)
server.listen(3000);