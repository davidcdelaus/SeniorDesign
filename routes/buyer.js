const express = require("express");
const router = express.Router();
const xss = require('xss');
const data = require("../data");

router.get("/",async(req,res)=>{
    try{
        res.status(200).render('buyer/buyerMain');
    }
    catch(e){
        res.status(404).send("Homepage not found");
    }

})
router.get("/contractscreate",async(req,res)=>{
    try{
    res.status(200).render('buyer/contractscreate');
    }
    catch(e){
        res.status(404).send("contractscreate page not found");
    }
})
router.get("/contractsview",async(req,res)=>{
    try{
        res.status(200).render('buyer/contractsview');
    }
    catch(e){
        res.status(404).send("contractsview page not found");
    }

})
router.get("/contractsedit",async(req,res)=>{
    try{
        res.status(200).render('buyer/contractsedit');
    }
    catch(e){
        res.status(404).send("contractsedit page not found");
    }

})
router.get("/buyerprofile",async(req,res)=>{
    try{
        res.status(200).render('buyer/buyerprofile');
    }
    catch(e){
        res.status(404).send("buyerprofile page not found");
    }

})
module.exports=router;