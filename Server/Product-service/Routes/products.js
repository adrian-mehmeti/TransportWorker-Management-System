const express = require('express');
const repo = require('../Repository/repository');

const router = express.Router();

router.get('/product', async (req, res) => {
  try {
    let results = await repo.all(req.query.search);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/product/:id', async (req, res) => {
  try {
    let results = await repo.one(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post('/product', async (req, res) => {
  try {
    let results = await repo.create(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete('/product/:id', async (req, res) => {
  try {
    await repo.delete(req.params.id);
    res.json(`Deleted colomun with id = ${req.params.id}`);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put('/product/:id', async (req, res) => {
  try {
    await repo.update(req.params.id, req.body);
    res.json(`updatetit `);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
