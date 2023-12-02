const express = require('express');
const app = express();
const port = 3000;
const router = require('./query.js');

app.use(router);
app.use(express.json());
app.use(express.urlencoded(
    {
        extended: true
    }
))

app.listen(port, () => {
    console.log(`Homework-8 app listening on port ${port}`);
});