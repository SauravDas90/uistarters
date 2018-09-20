const express = require('express');
const userModel = require('../model/users');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/',(req,res,next)=>{
    res.status(200).send('respond with a status');
});


router.get('/profile',(req,res,next)=>{
    // this route sends back the user from express framework
    // if authenticated
    res.status(200).send(req.user);
});



module.exports = router;