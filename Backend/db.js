const mongoose = require('mongoose');
module.exports = () => {
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/Login",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("Db Connection Successfull");
    }
    catch(error){
        console.log("DB Connection Failed");
        console.log("Dev DB Error", error);
    }
};