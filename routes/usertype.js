const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const User = require('../models/UserType')

/* --- GET: all user type --- */
router.get('/', async(req, res) => {
    try{
        const teams = await Team.find();
        res.json(teams);
    }catch(err){
        res.status(500).json({ message: err });
    }
})

/* --- GET: specific team --- */
router.get('/:teamId', getTeam, async (req, res) => {
    res.json(res.team)
})

/* --- POST: creating one team --- */
router.post('/', async (req, res) => {
    const user = new Team({
        name: req.body.name,
        //TODO: vanno inseriti tutti i parametri
    })
    try{
        const savedTeam = await team.save();
        res.status(201).json(savedTeam)
    }catch(err){
        res.status(400).json({ message: err });
    }
} )

/* --- DELETE: specific team --- */
router.delete('/:teamId', getTeam, async (req, res) => {
    try {
        const removedTeam = await res.team.remove()
        res.status(200).json({ message: 'Deleted team' })
    }catch(err){
        res.status(500).json({ message: err.message })
    }
})

/* --- UPDATE: specific Team --- */
router.patch('/:userId', getTeam, async (req, res) => {
    try{ 
        const updatedTeam = await res.team.updateOne();
        res.json(updatedTeam);
    }catch(err){
        res.status(400).json({ message: err });
    }
})

/* --- FUNCTION: get Team --- */
async function getTeam(req, res, next) {
    let team
    try {
        team = await Team.findById(req.params.teamId)
        if (team == null) {
            return res.status(404).json({ message: 'Cannot find team' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.team = team
    next()
  }

module.exports = router;
