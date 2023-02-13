const express =require('express');
const repo = require('../Repository/repository');

const router = express.Router();

router.get('/request/informo',async (req,res)=>{
    try{
        let results = await repo.allInformo();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }    
});

router.get('/request/produkt',async (req,res)=>{
    try{
        let results = await repo.allProdukt();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }    
});

router.get('/request/personale',async (req,res)=>{
    try{
        let results = await repo.allPersonale();
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }    
});

router.get('/request/:id',async (req,res)=>{
    try{
        let results = await repo.one(req.params.id);
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }    
});

router.post('/request',async (req,res)=>{
    try{
        let results = await repo.create(req.body)
        res.json(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }  

});

router.delete('/request/:id',async(req,res)=>{
    try {
        let results = await repo.delete(req.params.id);
        res.json(`Deleted colomun with id = ${req.params.id}`);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;