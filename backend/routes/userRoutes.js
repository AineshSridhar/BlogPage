const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/user');

dotenv.config();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/register', async(req, res) => {
    try{
        const {username, email, password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({username, email, password: hashedPassword});
        await newUser.save();

        res.status(201).json({message: "User registered successfully"});
    } catch (error){
        console.error("Error registering user: ", error);
        res.status(500).json({message: "Error registering user"});
    }
});

router.post('/login', async(req, res) => {
    try{
        const{email, password} = req.body;
        const user = await User.findOne({email});
        if (!user){
            return res.status(400).json({message: "Invalid credentials"});
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }
        const token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn: "1h"});
        res.status(200).json({message: "Login successful", token});
    } catch (error){
        console.error("Error logging in: ", error);
        res.status(500).json({message: "Error logging in"});
    }
});

module.exports = router;

