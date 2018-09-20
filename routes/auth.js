const passport = require('passport');
const jwt = require('jsonwebtoken');
const localStrategy = require('passport-local').Strategy;
const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {

    passport.authenticate('local', {
        session: false
    }, (err, user, info) => {
        if (err || !user) {
            res.status(400).json({
                message: 'User is unable to login',
                user: user
            });

        }

        req.login(user, {
            session: false
        }, (err) => {
            if (err)
                res.send(err);

            const token = jwt.sign(user, 'your_jwt_secret');
            return res.json({
                user,
                token
            });
        });


    }), (req, res);
});

module.exports = router;

