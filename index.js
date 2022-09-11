// Importando o pacote do Exprees para o Script index.js
const express = require('express');

// Tornando o Express executável dentro do Script index.js através da constante app.
const app = express();


app.listen(300, ()=>{
    console.log('Servidor Rodando!')
});