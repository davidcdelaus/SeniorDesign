const express = require("express");
const router = express.Router();
const xss = require('xss');
const data = require("../data");

router.get("/",async(req,res)=>{
    try{
        res.status(200).render('help/hel');
    }
    catch(e){
        res.status(404).send("Homepage not found");
    }

})
module.exports=router;