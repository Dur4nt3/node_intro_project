import { createServer } from 'node:http';
import fs from 'fs/promises';

const server = createServer(async (req, res) => {
    const url = req.url;

    if (url === '/') {
        const page = await fs.readFile('./routes/root/index.html', {
            encoding: 'utf8',
        });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(page);
        return;
    }

    if (url === '/index.css') {
        const stylesheet = await fs.readFile('./routes/root/index.css');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(stylesheet);
        return;
    }

    if (url === '/about') {
        const page = await fs.readFile('./routes/about/about.html', {
            encoding: 'utf8',
        });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(page);
        return;
    }

    if (url === '/contact-me') {
        const page = await fs.readFile('./routes/contact/contact.html', {
            encoding: 'utf8',
        });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(page);
        return;
    }

    const page = await fs.readFile('./routes/404/404.html', {
        encoding: 'utf8',
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(page);
});

server.listen(8080, '127.0.0.1', () => {
    console.log('server started at port 8080');
});
