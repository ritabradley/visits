const express = require('express');
const redis = require('redis');

const app = express();

const PORT = 5000;

const client = redis.createClient({});

client.set('visits', 0);

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send(`Number of visits: ${visits}`);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(PORT, () => {
    console.log('Listening on port 5000');
});
