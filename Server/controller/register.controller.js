const RegisterDBmodel = require('../models/register.model');

const createUser = async (req, res) => {
    try {
        const data = await RegisterDBmodel.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

const findUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = RegisterDBmodel.findOne({ email: email }).then((user) => {
            if (user) {
                if (user.password == password) {
                    res.json('Success');
                } else {
                    res.json('The password is incorrect!');
                }
            } else {
                res.json("No record found!");
            }

        })

        if (!data) {
            return res.status(404).json({ message: "User not exist!" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createUser,
    findUser
}