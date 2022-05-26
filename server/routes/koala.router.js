const express = require('express');
const pool = require('../modules/pool')
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST


// PUT


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