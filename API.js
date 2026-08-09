import express from 'express';
const servidor = express();

servidor.get('/mensagem/boasvindas', (req, resp) => {
    resp.send("Olá, seja bem vindo!");
});

servidor.get('/mensagem/ocupado', (req, resp) => {
    resp.send("Estou ocupado.");
});

servidor.get('/mensagem/ocupado/recado', (req, resp) => {
    resp.send("Estou ocupado, deixe uma mensagem no email: arthurherculano155@gmail.com")
});

servidor.get('/v2/mensagem/boasvindas', (req, resp) => {
    resp.send("Você chegou até aqui! Parabéns!!!")
})

servidor.listen(3000, () => console.log("Servidor rodando na porta 3000"));