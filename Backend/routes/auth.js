const router = require('express').Router();
const bcrypt = require('bcrypt');
const Joi = require('joi');
const { User } = require('../models/user.js');
router.post("/", async (req, res) => {
    try {
        const validate = (data) => {
            const schema = Joi.object({
                email: Joi.string().email().required().label("Email"),
                password: Joi.string().required().label("Password")
            })
            return schema.validate(data);
        }
        const { error } = validate(req.body);
        if (error) return res.status(400).send({ message: "validation error!!" })
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(410).send({ message: "invalid email or password !!" })
        const valid = await bcrypt.compare(req.body.password, user.password);
        if (!valid) return res.status(410).send({ message: "invalid email or Password !!" });
        // if(!user)return res.status(410).send({message:"invalid email (or) password"})
        const token = user.generateAuthToken();
        res.status(200).send({ message: "Login successful!!", token });

    } catch (error) {
        console.log("dev Login error:-", error);
        return res.status(500).send({ message: "loginserver error!!" });
    }
});
module.exports = router;