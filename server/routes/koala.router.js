const express = require('express');
const pool = require('../modules/pool')
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST
koalaRouter.post('/', (req, res)=>{
    let newKoalas = req.body;
    console.log('adding koala!', newKoalas);
    
    const sqlQuery = `
    INSERT INTO "koala"
        (name, gender, age, "readyToTransfer", notes)
    VALUES
        ($1, $2, $3, $4, $5);
`; 
const sqlParams = [
    req.body.name,        
    req.body.gender,         
    req.body.age,     
    req.body.readyToTransfer,
    req.body.notes           
];
console.log(sqlQuery);

pool.query(sqlQuery, sqlParams)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`POST to db failed: ${err}`);
            res.sendStatus(500);
        });
});

// PUT


// DELETE

module.exports = koalaRouter;