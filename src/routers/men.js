const express = require("express");
const router = new XPathExpression.Router();

const MensRanking = require("../models/mens");

//we will handle post request
router.post("/mens", async (req,res) =>{
    try{
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    }
    catch(err){
        res.status(400).send(err);
    }
})

//we will handle get request
router.get("/mens", async (req,res) =>{
    try{
       const getMens = await MensRanking.find({}).sort({"ranking" : 1});
        res.send(getMens);
    }
    catch(err){
        res.status(400).send(err);
    }
})

//we will handle request as per the parameters 
router.get("/mens/:id", async (req,res) =>{
    try{
        const _id= req.params.id;
        const getMen = await MensRanking.findById(_id);
        res.send(getMen);
    }
    catch(err){
        res.status(400).send(err);
    }
})

//we will handle patch request of individual
router.patch("/mens/:id", async (req,res) =>{
    try{
        const _id= req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new : true
        });
        res.send(getMen);
    }
    catch(err){
        res.status(400).send(err);
    }
})

//we will handle the delete rerq of individual
router.delete("/mens/:id", async (req,res) =>{
    try{
        const getMen = await MensRanking.findByIdAndDelete(req.params.id);
        res.send(getMen);
    }
    catch(err){
        res.status(500).send(err);
    }
})



router.get("/", (req,res) =>{
    res.send("Hello from the thapa");
})

module.exports = router;