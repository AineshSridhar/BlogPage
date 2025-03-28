const express = require('express');
const router = express.Router();
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

router.get('/:id', async(req, res) => {
    try{
        const blog = await Blog.findById(req.params.id);
        if (!blog){
            return res.status(404).json({message: "Blog not found"});
        }
        res.status(200).json(blog);
    } catch (error){
        console.error("Error fetching blog: ", error);
        res.status(500).json({message: "Error retrieving blog post"});
    }
});

router.put('/update/:id', async(req, res) => {
    try{
        const {title, content} = req.body;
        const blog = await Blog.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
        if (!blog){
            return res.status(404).json({message: "Blog not found"});
        }
        res.status(200).json({message: "Blog updated successfully", blog});
    } catch (error){
        console.error("Error updating blog: ", error);
        res.status(500).json({message: "Error updating blog post"});
    }
});

router.delete('delete/:id', async(req, res) => {
    try{
        const blog = Blog.findByIdAndDelete(req.params.id);
        if (!blog){
            return res.status(404).json({message: "Blog deleted successfully"});
        }
        res.status(200).json({message: "Blog deleted successfully"});
    } catch (error){
        console.error("Error deleting blog: ", error);
        res.status(500).json({message: "Error deleting blog post"});
    }
});

module.exports = router;
