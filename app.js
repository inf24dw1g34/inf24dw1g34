const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Configuração para carregar variáveis de ambiente
dotenv.config();

app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Inicia o servidor
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
