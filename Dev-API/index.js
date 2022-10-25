const express = require('express');
const app = express();


app.use(  
     express.urlencoded({ 
            extended: true, 
    }),
);

app.use(express.json());
 
//rotas - endpoints 
app.get('/', (req, res) => {
    res.json({message: 'Primeira rota criada com sucesso!'});
});

//rota post
app.post('/createproduct', (req, res) => {
    const name = req.body.name
    const price = req.body.price

    console.log(name)
    console.log(price)

    res.json({message: `O produto ${name} foi cadastrado com sucesso no valor de R$${price}`})
})

app.listen(3000);