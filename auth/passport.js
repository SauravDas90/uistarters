const passport = require('passport');
const UserModel = require('../model/users');
const localStrategy = require('passport-local').Strategy;
const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
//console.log(` jwt strategy is  .....${jwtStrategy}`);
console.log('extract jwt is... '+extractJwt);
passport.use(
    new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session:false
    },
    (email, password, done) => {
        return UserModel.findOne({
                email,
                password
            })
            .then((user) => {
                if (!user) {
                    return done(null, false, {
                        message: 'Incorrect user name or password'
                    })
                }
                return
                done(null, true, {
                    message: 'User has been foudn can be authorized'
                });
            })
            .catch(err => done(err,false));
    }


));

let opts =  {jwtFromRequest:extractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey:'your_jwt_secret'};
passport.use(new jwtStrategy(opts,(jwtPayLoad,done)=>{

    return UserModel.findOneById(jwtPayload.id)
            .then(user => {
                return done(null, user);
            })
            .catch(err => {
                return cb(err);
            });
})
);