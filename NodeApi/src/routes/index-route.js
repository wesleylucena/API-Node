'use strict';

const express = require ('express');
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node store API", 
        versiom: "0,02"
    });
});

module.exports = router;