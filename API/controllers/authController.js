const express = require('express');
const User = require('../models/user_model');
const router = express.Router();
const bcrypt = require('bcryptjs');

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
        const savedUser = await newUser.save();
        res.status(201).json('User saved');
    }catch(e){
        res.status(400).json({message: e.message});
    }
}