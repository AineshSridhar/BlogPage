const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jwt');
const dotenv = require('dotenv');
const User = require("../models/user");
const react = require('react');

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
    
})
