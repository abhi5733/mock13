
const express = require("express")
const {formModel} = require("../model/formModel")


const formRouter = express.Router()

formRouter.post("/appointments"  , async (req,res)=>{
   
    try{

        let form = new formModel(req.body)
        form.save()
        res.send({"msg":"form created successfully"})

    }catch(err){

        res.send({"err":"something went wrong"})

    }


})


formRouter.patch(`/update/:id`  , async (req,res)=>{
   
    const id=req.params.id

    let doc= await formModel.findOne({_id:id})


    try{
let num = doc.slots-1
        let book = await formModel.findByIdAndUpdate({_id:id},{slots:num})
        // let form = new formModel(req.body)
        // form.save()
        res.send({"msg":"updated successfully"})
    
// res.send(doc)

    }catch(err){

        // res.send({"err":"something went wrong"})

    }


})

formRouter.get("/all" , async(req,res)=>{

try{

    let form = await formModel.find()
    res.send(form)


}catch(err){
    res.send({"err":"something went wrong"})
}

})


module.exports =  {formRouter}