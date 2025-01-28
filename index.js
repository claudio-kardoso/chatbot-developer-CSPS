const app = require('./server'); // Ajuste o caminho conforme necessário

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando no endereço http://${HOST}:${PORT}/repositories`);
});
