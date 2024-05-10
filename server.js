const http = require('http');

// create http server
const express = require('express');
const app = express();

// Include router files
const usersRoute = require('./routes/users');
const notesRoute = require('./routes/notes');

app.get('/', (req, res) => {
    res.send('Hello root note');
});

app.use('/users', usersRoute);
app.use('/notes', notesRoute);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});