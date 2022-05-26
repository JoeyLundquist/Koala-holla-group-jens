const { Router } = require('express');
const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
router.get('/', (req, res) => {{
    const sqlQuery = `
        SELECT * FROM koala
        ORDER BY "name" ASC
    `;

    pool.query(sqlQuery)
        .then((dbRes) => {
            console.log('DB request success', dbRes);
            res.send(dbRes);
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