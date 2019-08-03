const express = require('express');
let bodyParser = require('body-parser');
let db = require('../models');
let router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/wishAdd', (req, res) => {
    let plant_id = req.body.plant_id;
    let user_id = req.body.user_id;
    console.log(`user ID ${user_id} plantId ${plant_id}`)
    //check for duplication
    db.wishlist.findAll({ where: { plant_id: plant_id, user_id: user_id }})
    .then((result) => {
      if(result.length === 0) {
        db.wishlist.create({user_id: user_id, plant_id: plant_id})
        res.send('added to database')
      }
      else { 
        return res.status(422).send('plant is already in collection')
      }
    })
    .catch(err => res.send(err))
})