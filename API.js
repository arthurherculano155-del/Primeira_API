import express from 'express';
const server = express();

server.get('/helloworld', (req, resp) => {
    resp.send("Olá, essa é minha primeira API. Estou muito feliz =)");
})

server.listen(3000, 
    () => {
        console.log("Porta 3000 funcionando e API subiu com sucesso!");
});