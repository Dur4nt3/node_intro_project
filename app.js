import express from 'express';
import 'dotenv/config';
import path from 'path';

const app = express();

const __dirname = import.meta.dirname;

app.get('/index.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/routes/root/index.css'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/routes/root/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/routes/about/about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, '/routes/contact/contact.html'));
});

// DO NOT PUT ANY REQUEST HANDLER BELOW THIS LINE
// ANY REQUESTS BELOW THIS LINE WILL GET REDIRECT TO THE "NOT FOUND" PAGE

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/routes/404/404.html'))
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`Express app started at: http://localhost:${[PORT]}`);
});