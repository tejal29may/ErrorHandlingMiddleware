// Heading: Error Handling Middleware for User Registration

// Overview:
// In this classroom, we'll focus on building an error handling middleware for a user registration system. 
// The system will accept requests from Postman for user registration, and it will enforce certain criteria for the input data.
//  The middleware will ensure that the provided data meets specific requirements, 
// and it will respond with appropriate error messages if any criteria are not met.

const express=require("express");
const app=express();

app.use(express.json());

const userRegistrationRouter=require("./routes/userRegistration")

app.use(userRegistrationRouter)

app.use('/*', (req, res) => {
    res.json({
        success: false,
        message: 'Path not found'
    })
})

app.listen(8080,()=>{
    console.log("your node app is running on port 8080");
})