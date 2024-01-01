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
    const logEntry = {
        host: req.headers.host,
        logName: 'your-log-name',
        user: req.headers['user-agent'],
        timestamp: new Date().toISOString(),
        request: {
            method: req.method,
            url: req.url,
            headers: req.headers,
        },
        statusCode: statusCode,
        size: Buffer.from(message).length,
    };

    console.log(JSON.stringify(logEntry), message);
}

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    console.log("hello dev");
});
