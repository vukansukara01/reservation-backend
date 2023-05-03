const express = require('express');
const router = express.Router();
const {getAllCards, getOneCard, deleteCard, createCard} = require('../controllers/cards');

router.route('/').get(getAllCards).post(createCard);
router.route('/:id').get(getOneCard).delete(deleteCard);


module.exports = router;