const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pool')
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


// PUT


// DELETE

module.exports = koalaRouter;