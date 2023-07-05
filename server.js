const http = require('http');
const port = 3000;

const routes = {
    '/': 'Initial Page',
    '/livros': 'BookPage',
    '/autores': 'AuthorList',
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(routes[req.url]);
});

server.listen(port, () => {
    console.log(`Ta funfando na porta http://localhost:${port}`)
})

