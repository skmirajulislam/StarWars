const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registerRoute = require('./routes/register.route');
const loginRoute = require('./routes/login.route');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api/register',registerRoute);
app.use('/api/login',loginRoute);

app.get('/', (req, res) => {
    res.send(`Hello From Node API : ${process.env.PORT}`);
})

async function main() {
    try {
        await mongoose.connect(process.env.URL_DB).then(() => {
            console.log('MongoDB connected..!');
        });

        app.listen(process.env.PORT, () => {
            console.log(`Express Server Working on ${process.env.PORT}`);
        })
    }
    catch (err) {
        console.log('Error is ', err);
    }
}

main()