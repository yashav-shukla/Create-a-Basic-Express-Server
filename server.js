const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000


//basic route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Handle favicon to avoid 404 error
app.get("/favicon.ico", (req, res) => res.status(204));

//start the server
app.listen(PORT, () => {
    console.log("Server is up and running on port 3000! Ready to handle requests.");
});