const Card = require("../models/cards.js");
const getAllCards = async (req, res) => {
  try {
    const response = await Card.find();
    res.send(response);
  } catch (err) {
    console.log(err);
  }
};

const getOneCard = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Card.findById(id);
    res.send(response);
  } catch (err) {
    console.log(err);
  }
};

const deleteCard = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Card.deleteOne({ _id: id });
    res.send(deleted);
  } catch (err) {
    console.error(err);
  }
};

const createCard = async (req, res) => {
  const card = await new Card({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const response = await Card.create(card);
    res.send(response);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllCards,
  getOneCard,
  deleteCard,
  createCard,
};
