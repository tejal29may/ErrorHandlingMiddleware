const express=require("express")
const router=express.Router();
const userRegistrationController=require("../controller/userRegistration")
const validateUsersMiddleware=require("../middleware/validateUsers")
router.post("/api/v1/user/registration",validateUsersMiddleware,userRegistrationController)

module.exports=router;