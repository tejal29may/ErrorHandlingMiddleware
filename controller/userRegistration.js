

const userRegistrationController=(req,res)=>{
    console.log(req.body);
    res.json({
        success:true,
        message:"this is the user registration api  with some fields"
    })
}


module.exports=userRegistrationController