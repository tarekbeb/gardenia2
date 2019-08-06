const express = require('express');
let bodyParser = require('body-parser');
let db = require('../models');
let router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/wishAdd', (req, res) => {
    let plant_id = req.body.plant_id;
    let user_id = req.body.user_id;
    let plant_name = req.body.plant_name;
    let moisture = req.body.moisture;
    let temperature_range = req.body.temperature_range;
    let shade_tolerance = req.body.shade_tolerance;
    let image_url = req.body.image_url;
    let in_collection = false;
    let in_wishlist = true;
    console.log(`user ID ${user_id} plantId ${plant_id}`)
    //check for duplication
    db.plant_collection.findAll({ where: { plant_id: plant_id, user_id: user_id }})
    .then((result) => {
      if(result.length === 0) {
        db.plant_collection.create({user_id: user_id, plant_id: plant_id, plant_name:plant_name, moisture:moisture,
            temperature_range:temperature_range, shade_tolerance:shade_tolerance, image_url:image_url,
            in_collection: in_collection, in_wishlist: in_wishlist
        })
        .then()
        res.send('added to database')
      }
      else { 
        return res.status(422).send('plant is already in collection')
      }
    })
    .catch(err => res.send(err))
})

router.post("/wishlist", (req, res) => {
    let user_id = req.body.user_id;
    console.log(user_id)
    db.plant_collection.findAll({where: {user_id : user_id}})
    .then((plants) => {
      res.send(plants)
    })
})

router.post('/wishRemove', (req, res) => {
    let id = req.body.plant_id;
    let user_id = req.body.user_id;
    console.log(`id to be removed ${id}`)
    db.plant_collection.destroy({where : {user_id: user_id, id: id}})
    res.send(`deleted from db`)
})

module.exports = router;