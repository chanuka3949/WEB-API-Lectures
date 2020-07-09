const express = require('express');
const router = express.Router();

const herosArray = [
    {
        id: 1,
        name: 'Bat Man'
    },
    {
        id: 2,
        name: 'Super Man'
    },
    {
        id: 3,
        name: 'Spider Man'
    }
]

router.get('/', (req, res) => {
    res.send(herosArray);
});

router.get('/:heroId', (req, res) => {
    // let heroId = req.params.heroId; //request parameter
    //let optionalValue = req.query.showMore; //query parameters
    //res.send("Request Parameters: " + heroId +", Query Parameters: " + optionalValue);

    let heroId = parseInt(req.params.heroId);
    let hero = herosArray.find(h => h.id === heroId);

    res.send(hero);
});

router.post('/', (req, res) => {

    if (!req.body.heroName) {
        return res.status(400).send("Not all mandetory values have been set");
    }

    let newHero = {
        id: herosArray.length + 1,
        name: req.body.heroName
    }
    herosArray.push(newHero);
    res.status(201).send(herosArray);
});

router.put('/:heroId', (req, res) => {
    let heroId = parseInt(req.params.heroId);
    let hero = herosArray.find(h => h.id === heroId);

    if (!hero){
        return res.status(404).send("Hero Id does not exit");
    }
    if (!req.body.heroName) {
        return res.status(400).send("Not all mandetory values have been set");
    }
    hero.name = req.body.heroName;
    res.send(herosArray);      
});

router.delete('/:heroId', (req, res) => {
    let heroId = parseInt(req.params.heroId);//This will filter out any values with number continued by a string(including characters)
    let hero = herosArray.find(h => h.id === heroId);

    if (!hero){
        return res.status(404).send("Hero Id does not exit");
    }
    let heroIndex = herosArray.indexOf(hero);
    let removedHero = herosArray.splice(heroIndex, 1);
    console.log(removedHero);
    res.send(herosArray);
});

module.exports = router;