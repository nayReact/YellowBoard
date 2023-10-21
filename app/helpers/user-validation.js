//express validation for user
const userValidationSchema = {
    username:{
        notEmpty: {
            errorMessage:  'Username is required'
        },
    },
    email:{
        notEmpty: {
            errorMessage: "Email is required"
        },
        isEmail: {
            errorMessage: "invalid Email format"
        }
    },
    mobile: {
        notEmpty: {
            errorMessage: "Mobile Number is required"
        },
        isLength: {
            oprions: {min: 10, max: 10},
            errorMessage: "Your phone number should be 10 Numbers"
        }
    },
    password: {
        notEmpty: {
            errorMessage: "password is required"
        },
        isLength: {
            options: { min: 8, max: 128 },
            errorMessage: "Password between 8-128 characters"
        },
        isStrongPassword: {
            options: { minLowercase: 1, minUppercase: 1, minNumbers: 1 },
            errorMessage: "min one lowercase, one uppercase, one number is required"
        }
    }
}
module.exports = userValidationSchema