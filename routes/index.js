const express = require('express');
const userModel = require('../model/users');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const url = 'mongodb://admuser:admuser1@127.0.0.1/test';
const redis = require('redis');

const client = redis.createClient({

    port:6379,
    host: '127.0.0.1'

});


/* router.get('/',(req,res,next)=>{
   res.render();
});
 */

// just to test the hashing of password 

router.post('/update',(req,res,next)=>{
    // this route sends back the user from express framework
    // if authenticated
    /* mongoose.connect(url);
    console.log(`Updating user with username ${req.body.name} and password ${req.body.password}` );
    const userToBsaved= new userModel({"name":Saurav,"password":"pass1234"});
    userToBsaved.save(function(err){
        if(err)
        console.log(err);
        else
        console.log('saved successfully');
    });
    res.status(200).send(1); */

    client.set('multi-key','47897',function(err) {
        if (err) { 
          throw err; /* in production, handle errors more gracefully */
        } else {
          client.get('multi-key',function(err,value) {
            if (err) {
              throw err;
            } else {
              console.log(value);
              res.status(200).send({"message":"Successfully created"});
            }
          }
        );
      }});
    



});


module.exports = router;