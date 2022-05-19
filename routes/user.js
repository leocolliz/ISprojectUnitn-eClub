const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const User = require('../models/UserType')

/* --- GET: all UserType --- */
router.get('/', async(req, res) => {
    try{
        const usertp = await UserType.find();
        res.json(usertp);
    }catch(err){
        res.status(500).json({ message: err });
    }
})

/* --- GET: specific UserType --- */
router.get('/:typeId', getUserType, async (req, res) => {
    res.json(res.usertp)
})

/* --- POST: creating one UserType --- */
router.post('/', async (req, res) => {
    const usertp = new UserType({
        name: req.body.name,
        //TODO: vanno inseriti tutti i parametri
    })
    try{
        const savedUserType = await usertp.save();
        res.status(201).json(savedUserType)
    }catch(err){
        res.status(400).json({ message: err });
    }
} )

/* --- DELETE: specific UserType --- */
router.delete('/:typeId', getUserType, async (req, res) => {
    try {
        const removedUserType = await res.usertp.remove()
        res.status(200).json({ message: 'Deleted user' })
    }catch(err){
        res.status(500).json({ message: err.message })
    }
})

/* --- UPDATE: specific UserType --- */
router.patch('/:typeId', getUserType, async (req, res) => {
    try{ 
        const updatedUserType = await res.usertp.updateOne();
        res.json(updatedUserType);
    }catch(err){
        res.status(400).json({ message: err });
    }
})

/* --- FUNCTION: get UserType --- */
async function getUserType(req, res, next) {
    let usertp
    try {
        usertp = await UserType.findById(req.params.typeId)
        if (usertp == null) {
            return res.status(404).json({ message: 'Cannot find user type' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.usertp = usertp
    next()
  }

module.exports = router;
