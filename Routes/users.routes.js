const express=require('express')
const useRouter=express.Router()
const {userModal}=require('../Model/user.model')
useRouter.get('/getcontacts',async(req,res)=>{
    try{
        const users=await userModal.find(req.query)
        res.status(200).send({"users":users})
    }
    catch(err){
        res.status(500).send({"msg":"Some error occured in Backend","err":err})
    }
})
useRouter.post('/',async(req,res)=>{
    try{
        const user=new userModal(req.body)
        await user.save()
        res.status(200).send({"msg":"new user added successfully","new_user":req.body})
    }
    catch(err){
        res.status(500).send({"msg":"Some error occured in Backend","err":err})
    }
})
useRouter.patch('/update/:id',async(req,res)=>{
    try{
          const id=req.params.id
          console.log(id)
          const user=await userModal.findByIdAndUpdate({_id:id},req.body)
          res.status(200).send({"msg":`the user with id- ${id} has been updated successfully`,"update":req.body})
    }
    catch(err){
        res.status(500).send({"msg":"Some error occured in Backend","err":err})
    }
})
useRouter.delete('/delete/:id',async(req,res)=>{
    try{
        const id=req.params.id
        console.log(id)
        const user=await userModal.findOneAndDelete({_id:id})
        res.status(200).send({"msg":" User deleted successfully"})
    }
    catch(err){
        res.status(500).send({"msg":"Some error occured in Backend","err":err})
    }
})
module.exports={useRouter}