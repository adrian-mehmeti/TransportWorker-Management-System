const express = require('express');
const repo = require('../Repository/repository');

const router = express.Router();

router.get('/dailyagendas', async (req, res) => {
  try {
    let results = await repo.all();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/dailyagendas/:id', async (req, res) => {
  try {
    let results = await repo.one(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post('/dailyagendas', async (req, res) => {
  try {
    let results = await repo.create(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete('/dailyagendas/:id', async (req, res) => {
  try {
    await repo.delete(req.params.id);
    res.json(`Deleted column with id = ${req.params.id}`);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put('/dailyagendas/:id', async (req, res, next) => {
  try {
    await repo.update(req.params.id, req.body);
    res.json(`Updated`);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
