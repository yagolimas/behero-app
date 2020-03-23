const express = require('express');

const app = express();

app.get('/', (req, res) => 
    res.json({ 
        author: 'Yago Lima',
        description: 'To be Hero'
    })
);

app.listen(666);