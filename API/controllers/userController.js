const express = require('express');
var bcrypt = require('bcryptjs');

module.exports.firstFunction = (req,res) => {
    res.send('Hello World');
}

module.exports.updateUser = (req,res) => {
    const {userName, email, password} = req.body;

    if(!userName || !email || !password || userName === '' || email === '' || password === ''){
        return res.status(400).json({message: 'Please fill all fields'});
    }

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    




}