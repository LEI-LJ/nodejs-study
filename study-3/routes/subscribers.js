const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscribers');
// Gettting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

// Gettting one

router.get('/:id', (req, res) => {
    res.send(req.params.id);
})


// Creating all
router.post('/', (req, res) => {

    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: res.body.subscribedToChannel,
    })
    try{

    }catch(err){
        
    }
    res.send(req)
})

module.exports = router
