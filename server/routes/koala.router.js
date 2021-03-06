const express = require('express');
const pool = require('../modules/pool')
const koalaRouter = express.Router();
// DB CONNECTION


// GET
koalaRouter.get('/', (req, res) => {{
    const sqlQuery = `
        SELECT * FROM koala
        ORDER BY "name" ASC
    `;

    pool.query(sqlQuery)
        .then((dbRes) => {
            console.log('DB request success', dbRes.rows);
            res.send(dbRes.rows);
        })
        .catch((err) => {
            console.log(`DB request failed`, err);

            res.sendStatus(500);
        });
}});

// POST
koalaRouter.post('/', (req, res)=>{
    let newKoalas = req.body;
    console.log('adding koala!', newKoalas);
    
    const sqlQuery = `
    INSERT INTO "koala"
        ("name", "gender", "age", "readyForTransfer", "notes")
    VALUES
        ($1, $2, $3, $4, $5);
`; 
const sqlParams = [
    req.body.name,        
    req.body.gender,         
    Number(req.body.age),     
    req.body.readyForTransfer,
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
koalaRouter.put('/:id', (req, res) => {
    console.log('updating transfer status of koala', req.params.id);
    let koalaId = req.params.id;
    
    let transferStatus = req.body.transferStatus;
    console.log('transfer status', transferStatus)

    let changeTransferStatus;
    if(transferStatus === 'true'){
        changeTransferStatus = false;
    }
    else{
        changeTransferStatus = true;
    }
    console.log('transfer status', changeTransferStatus)

    const sqlQuery = `
    UPDATE koala
    SET "readyForTransfer" = $2
    WHERE id = $1;
    `

    const sqlParams = [
        koalaId,
        changeTransferStatus
    ];

    pool.query(sqlQuery, sqlParams)
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log(`Failed to PUT ${err}`);
        res.sendStatus(500)
    })






})

// DELETE
koalaRouter.delete('/:id', (req, res) => {
    let koalaId = req.params.id;
    console.log('Delete request for id', koalaId);
  
    let sqlQuery = `
    DELETE FROM "koala" 
    WHERE "id" = $1;
    `;
    const sqlParams = [
        koalaId,             
    ];
    pool.query(sqlQuery, sqlParams)
      .then(() => {
        console.log('koala deleted');
        res.sendStatus(204);
      })
      .catch( (error) => {
        console.log(`Error making database query`, error);
        res.sendStatus(500); 
      })
  })



module.exports = koalaRouter;