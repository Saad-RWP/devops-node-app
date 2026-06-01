const express = require('express');
const os = require('os');
const app = express();

let count = 0;

app.get('/', (req, res) => {
    count++;
    res.send(`
        <h1>Node.js Web App</h1>
        <p>Timestamp: ${new Date().toISOString()}</p>
        <p>Container ID: ${os.hostname()}</p>
        <p>Counter: ${count}</p>
    `);
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});