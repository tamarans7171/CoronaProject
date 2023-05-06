const express = require("express")
const router = express.Router();
const MemberBL = require("../models/memberBL")

router.get("/",async function(req,res){
    let data = await MemberBL.getMembers()
return res.status(200).json(data)
})
router.get("/:ID",async function(req,res){
    let ID=req.params.ID
    console.log(ID);
    let data = await MemberBL.getMember(ID)
return res.status(200).json(data)
})

router.post("/",async function(req,res){
    let data = await MemberBL.addMember(req.body)
    console.log(data+" ------------------------------------");
return res.status(200).json(data)
})

router.put("/:ID",async function(req,res) {
    let ID=req.params.ID;
    let member=req.body
    let data = await MemberBL.updateMember(ID,member)
    return res.status(200).json(data);
    
})
router.delete("/:ID",async function(req,res){
    let ID=req.params.ID
   let data= await MemberBL.deleteMember(ID)
    return res.status(200).json(data)
})

module.exports=router;
