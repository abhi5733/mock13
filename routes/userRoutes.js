
  const express = require("express")
  const {userModel} = require("../model/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
  const userRouter = express.Router()


   userRouter.post("/signup", async (req,res)=>{
    
     const {email,password,confirm} = req.body
console.log(req.body)
      let user1 = await userModel.findOne({email})
     console.log(user1)
      if(user1==null  && password===confirm){
     try{

        bcrypt.hash(password, 10, async (err, hash)=> {
            if(hash){

                let user = new  userModel({email,password:hash,confirm:hash})
                 await user.save()
                res.send({"msg":"signup successfull"})


            }else{
                res.send({"err":"something went wrong"})
            }
          
        });

    
     }catch(err){
        res.send({"err":"something went wrong"})
     }

    }else{
        res.send({"err":"something went wrong"})
    }


   })


   userRouter.post("/login" ,async (req,res)=>{

    const {email,password} = req.body
    try{

         const user = await userModel.findOne({email})

        bcrypt.compare(password, user.password, (err, result)=> {
            
            if(result){

                const token = jwt.sign({ userID: user._id }, 'masai');
                res.send({"msg":"login successfull","token":token})

            }else{
                res.send({"err":"something went wrong"})
            }

        })


    }catch(err){
        res.send({"err":"something went wrong"})
    }

   })





  module.exports = {userRouter}

