const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/500') {
        res.statusCode = 500;
        const errorMsg = 'Error ne (500)\n';
        console.error(errorMsg);
        logRequest(req, res, 500, errorMsg);
        res.end(errorMsg);
    } else {
        res.statusCode = 200;
        const msg = 'Hello Node dev 1!\n';
        console.log("hello dev");
        logRequest(req, res, 200, msg);
        res.end(msg);
    }
});

function logRequest(req, res, statusCode, message) {
    const logEntry = `~${req.method} ${req.url} HTTP/${req.httpVersion}" ${statusCode} ${message}`;
    console.log(logEntry);
}

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    console.log("hello dev");
});
