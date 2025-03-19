const express = require('express');
const router = express.Router;
const Blog = require("../models/blogs");
const User = require("../models/user");

router.post('/add-post', async(req, res) => {
    console.log(req.user)
    try{
        console.log(req.user);
        const{title, content} = req.body;
        const authorId = req.user.id;

        const user = await User.findById(authorId);
        if (!user){
            return res.status(404).json({message: "User not found"});
        }
        
        const blog = new Blog({
            title: title,
            author_name: user.username,
            content: content
        })

        await blog.save();
        res.status(201).json({message: "Blog posted successfully", blog})
    } catch (error) {
        console.error("Some error occurred: ", error);
        res.status(500).json({message: "Error posting blog"});
    }
});

router.get('/:id', (req, res) => {
    
})