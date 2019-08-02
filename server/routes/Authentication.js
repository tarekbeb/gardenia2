let express = require('express');
const passportService = require('../config/passAuth');
let passport = require('passport');
let bcrypt = require('bcryptjs');
let jwt = require('jwt-simple');
let config = require('../authConfig');
let bodyParser = require('body-parser');
let db = require('../models');
let router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// turning off session
let requireAuth = passport.authenticate('jwt', { session: false });
let requireSignin = passport.authenticate('local', { session: false });

let tokenForUse = (user) => {
    let timestamp = new Date().getTime;
    return jwt.encode({ user_name: user.username, sub: user.id, iat: timestamp }, config.secret)
    
}

// request route => passport => authorized to see route

// router.get('/', requireAuth, (req, res) => {
//     res.send
// })

router.post('/signin', requireSignin, (req, res) => {
    res.send({ token: tokenForUse(req.user) })
})

router.post('/signup', (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password, 8);

    // REQUIRE USERNAME, EMAIL AND PASSWORD
    if(!username || !email || !password) {
        return res.status(422).send({ error: 'Please provide a username, email and password.'})
    }

    // CHECK FOR DUPLICATION
    db.user.findAll({ where: { email: email }})
    .then(results => {
        if(results.length === 0){
            // ADD RECORD TO DATABASE
            db.user.create({username: username, email: email, password: password})
            .then((user) => {
                return res.json({ token: tokenForUse(user)})
            }).catch((err) => {
                console.log(err);
            });
        } else {
            // record already exists
            return res.status(422).send({ error: 'That email already exists...'})
        }
    }).catch((err) => {
        console.log(err)
    });
});

module.exports = router;