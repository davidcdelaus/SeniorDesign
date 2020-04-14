const express = require("express");
const router = express.Router();
const xss = require('xss');
const data = require("../data");

router.get("/",async(req,res)=>{
    try{
        res.status(200).render('admin/adminMain');
    }
    catch(e){
        res.status(404).send("Homepage not found");
    }

})
router.get("/groupscreate",async(req,res)=>{
    try{
    res.status(200).render('admin/groupscreate');
    }
    catch(e){
        res.status(404).send("groupscreate page not found");
    }
})
router.get("/groupsview",async(req,res)=>{
    try{
        res.status(200).render('admin/groupsview');
    }
    catch(e){
        res.status(404).send("groupsview page not found");
    }

})
router.get("/groupsedit",async(req,res)=>{
    try{
        res.status(200).render('admin/groupsedit');
    }
    catch(e){
        res.status(404).send("groupsedit page not found");
    }

})
router.get("/userscreate",async(req,res)=>{
    try{
    res.status(200).render('admin/userscreate');
    }
    catch(e){
        res.status(404).send("userscreate page not found");
    }
})
router.get("/usersview",async(req,res)=>{
    try{
        res.status(200).render('admin/usersview');
    }
    catch(e){
        res.status(404).send("userpsview page not found");
    }

})
router.get("/usersedit",async(req,res)=>{
    try{
        res.status(200).render('admin/usersedit');
    }
    catch(e){
        res.status(404).send("usersedit page not found");
    }

})
router.get("/contractscreate",async(req,res)=>{
    try{
    res.status(200).render('admin/contractscreate');
    }
    catch(e){
        res.status(404).send("contractscreate page not found");
    }
})
router.get("/contractsview",async(req,res)=>{
    try{
        res.status(200).render('admin/contractsview');
    }
    catch(e){
        res.status(404).send("contractsview page not found");
    }

})
router.get("/contractsedit",async(req,res)=>{
    try{
        res.status(200).render('admin/contractsedit');
    }
    catch(e){
        res.status(404).send("contractsedit page not found");
    }

})
router.get("/reportscreate",async(req,res)=>{
    try{
    res.status(200).render('admin/reportscreate');
    }
    catch(e){
        res.status(404).send("reportcreate page not found");
    }
})
router.get("/reportsview",async(req,res)=>{
    try{
        res.status(200).render('admin/reportsview');
    }
    catch(e){
        res.status(404).send("reportsview page not found");
    }

})
router.get("/reportsedit",async(req,res)=>{
    try{
        res.status(200).render('admin/reportsedit');
    }
    catch(e){
        res.status(404).send("reportsedit page not found");
    }

})
router.get("/emcprofile",async(req,res)=>{
    try{
        res.status(200).render('admin/emcprofile');
    }
    catch(e){
        res.status(404).send("emcprofile page not found");
    }

})
router.get("/buyerprofile",async(req,res)=>{
    try{
        res.status(200).render('admin/buyerprofile');
    }
    catch(e){
        res.status(404).send("buyerprofile page not found");
    }

})
module.exports=router;