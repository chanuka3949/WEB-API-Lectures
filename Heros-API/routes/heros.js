const express = require('express');
const router = express.Router();
const Hero = require('../models/hero');

router.get('/', async (req, res) => {
    try {
        let heros = await Hero.find();
        return res.send(heros);
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

router.get('/:heroId', async (req, res) => {
    try {
        let hero = await Hero.findById(req.params.heroId);
        return res.send(hero);
    } catch (e) {
        return res.status(500).send(e.message);
    }

});

router.post('/', async (req, res) => {
    if (!req.body.heroName) {
        return res.status(400).send("Error of hero name ");
    }
    try {
        let heroTobeAddToDb = new Hero({
            name: req.body.heroName,
            birthName: req.body.birthName,
            movies: req.body.movies,
            likeCount: req.body.likeCount,
            imageUrl: req.body.imageUrl,
            deceased: req.body.deceased
        });
        heroTobeAddToDb = await heroTobeAddToDb.save();
        return res.send(heroTobeAddToDb);
    }
    catch (e) {
        return res.status(500).send(e.message);
    }
    finally {
        console.log("Busted")
    }
});

router.put('/:heroId', async (req, res) => {
    try {
        if (!req.body.likeCount) {
            return res.status(400).send("Not all mandetory values have been set");
        }
        let hero = await Hero.findByIdAndUpdate(req.params.heroId, {$set: { name: req.body.likeCount }}, {useFindAndModify: false})
        if (!hero) {
            return res.status(404).send("Hero Id does not exit");
        }
        return res.send(hero);
    } catch (e) {
        return res.status(500).send(e.message);
    }
});

router.delete('/:heroId', async (req, res) => {
    try {
        let hero = await Hero.findByIdAndDelete(req.params.heroId);
        if (!hero) {
            return res.status(404).send("Hero Id does not exit");
        }
        return res.send(hero);
        res.send(hero);
    } catch (e) {
        return res.send.status(500).send(e.message);
    }
});

module.exports = router;