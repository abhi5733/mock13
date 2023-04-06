
 const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{

    let token = req.headers.authorization

    try{

        const decoded = jwt.verify(token, 'masai')
        
        if(decoded){
            next()
        }else{
            res.send({"err":"something went wrong1"})
        }


    }
catch(err){
 console.log(err)
    res.send({"err":"something went wrong2"})

}

 }

 module.exports = {auth}