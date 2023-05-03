require('./db/connect');
const express = require('express');
const app = express();
const cards = require('./routes/cards');


app.use(express.json());

app.use('/api/v1/cards', cards)

const port = 3000;
app.listen(port);

