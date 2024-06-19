const express = require('express');
const User = require('../models/user_model');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 

module.exports.signup = async (req , res) => {
    const { userName, email, password } = req.body;

    
    

    if (!userName || !email || !password || userName === '' || email === '' || password === '') {
        return res.status(400).json({ message: 'Please fill all fields' });

    }

    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
        userName: userName,
        email: email,
        password: hashedPassword
    })
    console.log(newUser)

    try{
        console.log('before save')
        const savedUser = await newUser.save();
        console.log('after save')
        res.status(201).json('User saved');
    }catch(e){
        res.status(400).json({message: e.message});
    }
}





module.exports.signin = async (req, res) => {
    const {email,password} = req.body;
    if(!email || !password || email === '' || password === ''){
        return res.status(400).json({message: 'Please fill all fields'});
    }

    try{
        const user = await User.findOne({email: email});

        if(!user){
            return res.status(400).json({message: 'User not found'});
        }
        console.log(user);

        const validPassword = bcrypt.compareSync(password ,user.password);

        if(!validPassword){
            return res.status(400).json({message: 'Invalid password'});
        }


        const token = jwt.sign({
             id: user._id
        },process.env.JWT_SECRET,{expiresIn: '1d'});
 

        const {password:pass, ...others} = user._doc;
  

        res.status(200).cookie('access_token', token,{
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        }).json({message: others})



        

    }catch(error){
        res.status(400).json({message: error.message});
    }
}