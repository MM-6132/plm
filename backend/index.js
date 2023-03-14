const express = require("express");
const app = express();
const MongoClient = require('mongodb').MongoClient;
const port = 3000;
const programmingLanguagesRouter = require("./routes/programmingLanguages");

// Connect to the database
const url = 'mongodb://localhost:27017/PLMdb';
MongoClient.connect(url, (err, client) => {
    if (err) throw err;
    console.log('Database connected!');
    const db = client.db('mydatabase');

    // Define API endpoints
    app.get('/users', (req, res) => {
        db.collection('users').find().toArray((err, result) => {
            if (err) throw err;
            res.send(result);
        });
    });

    // Start the server
    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });
});

app.use("/programming-languages", programmingLanguagesRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });

    return;
});

app.listen(port, () => {
    console.log(`PLM API listening at http://localhost:${port}`);
});