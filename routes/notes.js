let express = require('express');
let router = express.Router();
let Note = require('../impl/notes.impl');

/* Add new NOTE to database */
router.post('/', function (req, res) {
    new Note(req, res).add();
});

/* Get entire COLLECTION */
router.get('/', (req, res) => {
    new Note(req, res).getEntireCollection();
});

/* Get NOTE by id */
router.get(`/:id`, (req, res) => {
    new Note(req, res).get();
});

/* Delete NOTE by id */
router.delete(`/:id`, (req, res) => {
    new Note(req, res).delete();
});

/* Update NOTE by id */
router.put(`/:id`, (req, res) => {
    new Note(req, res).update();
});

module.exports = router;