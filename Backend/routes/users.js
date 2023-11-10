const router = require('express').Router();
const bcrypt = require('bcrypt');
const {User,validate} = require('../models/user.js');
router.post('/',async (req,res)=>{
    try{
        const {error} = validate(req.body);
        if(error) return res.status(400).send({message:'validation error'});
        const user = await User.findOne({email:req.body.email});
        if(user) return res.status(409).send({message:'Email already exists'});
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        await User({...req.body,password:hashedPassword}).save();
        return res.status(200).send({message:'Signup Successfull'});
    }
    catch(error){
        console.log('dev sign up error',error);
        res.status(500).send({message:'Error!! server not working'})
    }
})
module.exports=router;