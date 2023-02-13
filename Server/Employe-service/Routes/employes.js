const express = require('express');
const repo = require('../Repository/repository');

const router = express.Router();

router.get('/employe', async (req, res) => {
  try {
    let results = await repo.all(req.query.search);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/employe/:id', async (req, res) => {
  try {
    let results = await repo.one(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post('/employe', async (req, res) => {
  try {
    let results = await repo.create(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post('/login', async (req, res) => {
  try {
    const email = req.body.email;
    const pass = req.body.password;
    // validateCourse(email,pass)
    let results = await repo.login(email, pass);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete('/employe/:id', async (req, res) => {
  try {
    let results = await repo.delete(req.params.id);
    res.json(`Deleted colomun with id = ${req.params.id}`);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put('/employe/:id', async (req, res) => {
  try {
    let results = await repo.update(req.params.id, req.body);
    res.json(`updatetit `);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
