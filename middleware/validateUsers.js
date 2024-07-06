const validateUsers = (req, res, next) => {
    const {
        firstName,
        lastName,
        password,
        email,
        phoneNumber
    } = req.body;

    // Validate first name and last name
    const nameRegex = /^[A-Z][a-zA-Z]*(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
        res.status(400).json({
            sucess: false,
            message: "First and last name must start with a capital letter and contain only alphabetic characters, spaces, hyphens, or apostrophes."
        });

    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        res.status(400).json({
            sucess: false,
            message: "Email address must contain '@' and follow standard email format."
        });

    }

    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {

        res.status(400).json({
            sucess: false,
            message: "Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one numeric character, and one special character."
        });
    }
    next()

}

module.exports = validateUsers;