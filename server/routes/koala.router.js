const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pool')

// DB CONNECTION


// GET


// POST


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
    SET "readyToTransfer" = $2
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

module.exports = koalaRouter;