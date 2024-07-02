const express = require('express');
const User = require('../models/user_model');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const sendEmail = require('../Utils/sendEmail');
const Token = require("../models/token");
const crypto = require("crypto");
const Joi = require("joi");




module.exports.signup = async (req , res) => {
    console.log('we are in the signup function in backend')
    const { userName, email, password,urlAddress, dataToBeSent} = req.body;

    
    

    if (!userName || !email || !password || userName === '' || email === '' || password === '') {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
        userName: userName,
        email: email,
        password: hashedPassword,
        createdAt: Date.now()
    })


    try{

        const savedUser = await newUser.save();

        const newToken =  new Token({
            userId: savedUser._id,
            token: crypto.randomBytes(32).toString("hex"),
        });
        const savedToken = await newToken.save();

        const URL = `${process.env.BASE_URL}users/${savedUser._id}/verify/${newToken.token}?originalUrl=${urlAddress.from?.from}&${dataToBeSent}`;


        await sendEmail(savedUser.email,"Verify Email",URL);
        console.log("aaa");

        res.status(201).json('An Email sent to your account for verification');
    }catch(e){
        if (e.code === 11000) {
            console.log(e.code);
            // Duplicate key error
            if (e.keyValue.email) {
                return res.status(400).send({ message: 'Email is already in use' });
            }
            if (e.keyValue.userName) {
                return res.status(400).send({ message: 'Username is already in use' });
            }
        }
    
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
            return res.status(400).json({message: 'Invalid credentials'});
        }

        if (!user.verified) {
            return res.status(400).send('Email not verified');
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

module.exports.googleSignIn = async (req,res) => {
    const {email,name,googlePhotoURL} = req.body;


    try{
        console.log('try')
        const user = await User.findOne({email: email});
        if(user){
            console.log('user exists')
            const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn: '1d'});
            const {password:pass, ...others} = user._doc;
            console.log('token')
            res.status(200).cookie('access_token', token,{
                httpOnly: true,
                secure: true,
                sameSite: 'none',
            }).json({message: others})
            console.log('token sent')
        }

        else{
            console.log('user does not exist')
            const generatedPassword = Math.random().toString(36).slice(-8);
            var salt = bcrypt.genSaltSync(10);
            var hashedPassword = bcrypt.hashSync(generatedPassword, salt);

            console.log('before save')

            const newUser = new User({
                userName: name.toLowerCase().split(' ').join('') + Math.floor(Math.random() * 1000),
                email: email,
                password: hashedPassword,
                profilePicture: googlePhotoURL,
                verified: true

            })
            console.log('newUser')
            
            const savedUser = await newUser.save();
            console.log('after save')
            const token = jwt.sign({id: savedUser._id},process.env.JWT_SECRET,{expiresIn: '1d'});
            const {password:pass, ...others} = savedUser._doc;
            console.log('token')
            res.status(200).cookie('access_token', token,{
                httpOnly: true,
                secure: true,
                sameSite: 'none',
            }).json({message: others})
            console.log('token sent')

        }

    }catch(error){
        console.log('error')
        console.log(error);
        console.log('tata')
        res.status(400).json({message: error.message});

    }

}

module.exports.signout = async (req,res) => {
    try{
        res.clearCookie('access_token').json({message: 'Signout success'});
        console.log('cookie cleared')
    }
    catch(error){
        console.log('error clearing cookie')
    }
    
}

