const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Enter a product name'],
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const RegisterDBmodel = mongoose.model('Register', RegisterSchema);

module.exports = RegisterDBmodel;
