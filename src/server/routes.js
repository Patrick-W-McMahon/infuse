var express = require('express');
var router = express.Router();

const { GetUserName, GetENV } = require('./routes/system');
const { getContacts, postContact, deleteContact } = require('./routes/contacts');
const { postMatch } = require('./routes/rockPaperScissors');
const { postTttMatch } = require('./routes/ticTacToe');

//Middle ware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now());
//     next();
// });
//Home page
router.get('/api/username', GetUserName);
//Get ENV
router.get('/api/env', GetENV);
//Contacts
router.get('/api/contacts', getContacts);
router.post('/api/contacts', postContact);
router.delete('/api/contacts/:id', deleteContact);
//Rock Paper Scissors
router.post('/api/match', postMatch);
//Tick Tac Toe
router.post('/api/tic-tac-toe/move', postTttMatch);

module.exports = router;