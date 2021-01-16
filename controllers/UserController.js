const User = require('../models/User');

exports.createUser = async (req,res)=>{
    try {

        console.log(req.body);
        
        res.status(200).send({
            info:'success'
        })
    } catch (error) {
        res.status(400).send({
            info:'errore'
        })
    }
}