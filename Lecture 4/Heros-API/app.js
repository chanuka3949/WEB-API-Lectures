const express = require('express');

const app = express();
const PORT = 3000;

let herosArray = [
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

app.use(express.json()); //Catch json data in the request body

app.get('/api/heros', (req, res) => {
    res.send(herosArray);
});

app.get('/api/heros/:heroId', (req, res) => {
    // let heroId = req.params.heroId; //request parameter
    //let optionalValue = req.query.showMore; //query parameters
    //res.send("Request Parameters: " + heroId +", Query Parameters: " + optionalValue);

    let heroId = parseInt(req.params.heroId);
    let hero = herosArray.find(h => h.id === heroId);

    res.send(hero);
});

app.post('/api/heros', (req, res) => {

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

app.put('/api/heros/:heroId', (req, res) => {
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

app.delete('/api/heros/:heroId', (req, res) => {
    let heroId = parseInt(req.params.heroId);//This will filter out any following char values
    let hero = herosArray.find(h => h.id === heroId);

    if (!hero){
        return res.status(404).send("Hero Id does not exit");
    }
    console.log(herosArray.filter(h => h.id === heroId));
    //herosArray.splice(herosArray.filter(h => h.id === heroId)[0]);
    res.send(herosArray);
})
//DELETE
//use array.splice

app.listen(PORT, () => {
    console.log("Server is listening");
});