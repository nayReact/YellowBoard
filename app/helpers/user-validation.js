//express validation for user
const User= require('../models/user-model') 

const usernameSchema = {
    notEmpty:{
        errorMessage: 'username is required'
    }
}

const passwordSchema = {
    notEmpty:{
        errorMessage: 'password is required'
    },
    isLength: {
        options: { min: 8, max: 128 },
        errorMessage: 'Password between 8 - 128 characters'
    }, 
    isStrongPassword: {
        options: { minLowercase: 1, minUppercase: 1, minNumbers: 1 },
        errorMessage: "min one lowercase, one uppercase, one number is required"
    }
}

const emailRegisterSchema = {
    notEmpty: {
        errorMessage: 'email is required'
    },
    isEmail: {
        errorMessage:  'invalid email format'
    },
    custom: {
        options: async(value) => {
           // console.log(req,url)
            const user = await User.findOne({ email: value })
            if (user) {
                throw new Error('email is already registered')
            } else {
                return true
            }
        }
    }
}

const mobileSchema = {
    notEmpty: {
        errorMessage: "Mobile Number is required"
    },
    isLength: {
        oprions: {min: 10, max: 10},
        errorMessage: "Your phone number should be 10 Numbers"
    }
}

const emailLoginSchema = {
    notEmpty:{
        errorMessage: 'email is required'
    },
    isEmail:{
        errorMessage: 'Invalid email format'
    },
}

const userValidationSchema = {
    username:{
        notEmpty: {
            errorMessage:  'Username is required'
        }
    },
    email:{
        notEmpty: {
            errorMessage: "Email is required"
        },
        isEmail: {
            errorMessage: "invalid Email format"
        },
        custom:{
            options: async (value) => {
                //console.log(req.url)
                const user = await User.findOne({email: value})
                if(user) {
                    throw new Error('Email is already registered')
                } else {
                    return true
                }
            }
        }
    },
    mobile: {
        notEmpty: {
            errorMessage: "Mobile Number is required"
        },
        isLength: {
            oprions: { min: 10, max: 10 },
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

const userRegisterValidationSchema = {
    username: usernameSchema,
    email: emailRegisterSchema,
    password: passwordSchema,
    mobile: mobileSchema
}

const userLoginValidationSchema = {
    email: emailLoginSchema,
    password: passwordSchema
}

module.exports = {
    userRegisterValidationSchema,
    userLoginValidationSchema 
}