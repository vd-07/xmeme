// import necessary packages

const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');


// import Routes

const postsRoute = require('./routes/posts');

// MIDDLEWARE

app.use(cors());

app.use(express.json());

app.use('/memes', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send("Home Page");
});

// Connect to DB

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, useMongoClient: true },
    () => {console.log("Connected to DB");
});

// Start listening to the server

app.listen(process.env.PORT || 8081, () => {
    console.log(`Server listening at port : ${process.env.PORT}`);
});