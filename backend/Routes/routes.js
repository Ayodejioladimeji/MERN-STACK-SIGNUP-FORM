const express = require('express');
const router = express.Router()
const signUpTemplateCopy = require('../Models/SignUpModels')
const bcrypt = require('bcrypt')


router.post('/signup', async(request, response)=>{

    // SALTING THE PASSWORD FIRSTLY
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        userName:request.body.userName,
        email:request.body.email,
        textarea:request.body.textarea,
        password:securePassword
    })

        signedUpUser.save()
        .then(data =>{
            response.json(data)
        })
        .catch(error =>{
            response.json(error)
        })
})

module.exports = router