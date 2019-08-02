let passport = require('passport');
let config = require('../authConfig.js');
let db = require('../models');
let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;
let bcrypt = require('bcryptjs');
let localStrategy = require('passport-local');


// create options

let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}



// CREATE A JWT STRATEGY

let jwtLogin = new JwtStrategy(jwtOptions, (payload, done)=> {

    // FIND THE USER INFORMATION
    db.user.findByPk(payload.sub)
    .then(foundUser => {
        if(foundUser){
            done(null, foundUser)
        } else {
            done(null, false)
        }
    }).catch((err) => {
        return done(err, false)
    });
});

// Local Strategy

let localOptions = { usernameField: 'email'}

let localLogin = new localStrategy(localOptions, (email, password, done) => {
    db.user.findAll({where: {email: email}})
    .then(results => {
        if(results != null){
            let user = results[0];

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if(err){
                    return done(err)
                }

                if(!isMatch){
                    return done(null, false)
                }

                return done(null, user)
            })
        } else {
            return done(null, false)
        }
    }).catch((err) => {
        return done(err)
    });
})


passport.use(jwtLogin);
passport.use(localLogin);