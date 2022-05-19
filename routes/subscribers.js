const express = require('express')
const subscriber = require('../models/subscriber')
const router = express.Router()
const Subscriber = require('../models/subscriber')

//Getting all
router.get('/', async (req, res) => {
    try{
        const subscibers = await Subscriber.find()
        res.json(subscibers)
    }catch{
        res.status(500).json({ message: err.message })
    }
})

//Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id) //ritorna l'id richiesto
})

//creating one
router.post('/', async (req, res) => {
    const subsciber = new Subscriber({
        name : req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })

    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }catch(err){
        res.status(400).json({ message: err.message })
    }


})
module.exports = router 
