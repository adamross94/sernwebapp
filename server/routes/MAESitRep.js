const express = require('express');
const router = express.Router();
const { MAESitRep } = require('../models')


router.get("/", async (req, res) => {
    const listOfMAESitRep = await MAESitRep.findAll();
    res.json(listOfMAESitRep);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await MAESitRep.create(post); 
    res.json(post);
});

module.exports = router;