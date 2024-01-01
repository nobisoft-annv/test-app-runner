const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/500') {
        res.statusCode = 500;
        const errorMsg = 'Error ne (500)\n';
        console.error(errorMsg);
        res.end(errorMsg);
    } else {
        res.statusCode = 200;
        const msg = 'Hello Node dev 1!\n';
        console.log("hello dev");
        res.end(msg);
    }
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    console.log("hello dev");
});
