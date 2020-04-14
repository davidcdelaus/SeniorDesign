const express = require("express");
const router = express.Router();
const xss = require('xss');
const data = require("../data");

router.get("/",async(req,res)=>{
    try{
        res.status(200).render('layouts/main');
    }
    catch(e){
        res.status(404).send("Homepage not found");
    }

})
router.get("/login",async(req,res)=>{
    try{
        res.render("login/log");
    }
    catch(e){
        throw "login page is not loaded"+e;
    }
})
router.get("/help",async(req,res)=>{
    try{
        res.render("help/hel")
    }
    catch(e){
        throw "Couldn't load search page"+e;
    }
})


module.exports=router;