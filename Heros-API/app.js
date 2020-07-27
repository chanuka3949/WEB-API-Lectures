const express = require('express');
const mongoose = require('mongoose');
const herosRoutes = require('./routes/heros');
const cors = require('cors')
const homeRoutes = require('./routes/home');
const authenticator = require('./middleware/authentication');
const email = require('./middleware/email');

const app = express();
const PORT = 5000;

app.use(express.json()); //Catch json data in the request body

//Middleware
app.use(cors());
app.use(authenticator);
app.use(email);
app.use('/api/heros', herosRoutes);
app.use('/', homeRoutes);

mongoose
    .connect('mongodb://localhost/herodb', {useNewUrlParser: true, useUnifiedTopology: true})
    .then((conn) => console.log('Connected to MongoDB'))
    .catch((err) => console.log("Error occurred : " + err));

app.listen(PORT, () => {
    console.log("Server is listening");
});