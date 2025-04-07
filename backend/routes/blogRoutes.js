    const express = require('express');
    const router = express.Router();
    const Blog = require("../models/blogs");
    const User = require("../models/user");
    const verifyAuth = require('../middleware/authMiddleware');

    router.post('/add-post', verifyAuth, async (req, res) => {
        try {
            console.log("Authenticated user:", req.user); 
    
            const { title, content, category } = req.body;  
            const authorId = req.user.userId;
    
            console.log("Extracted authorId:", authorId); 
    
            const user = await User.findById(authorId);
            if (!user) {
                return res.status(404).json({ message: "User not found", authorId });
            }
    
            const blog = new Blog({
                title,
                author_name: user.username,
                content,
                category, 
                authorId
            });
    
            await blog.save();
            res.status(201).json({ message: "Blog posted successfully", blog });
        } catch (error) {
            console.error("Error posting blog:", error);
            res.status(500).json({ message: "Error posting blog" });
        }
    });
    
    router.get("/all", async(req, res) => {
        try{
            const blogs = await Blog.find();
            res.status(200).json(blogs)
        } catch (error) {
            console.error("Error fetching blogs ", error);
            res.status(500).json({message: "Error retrieving blogs"});
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
        try {
            const { title, content, category } = req.body;  // ✅ Include category
            const blog = await Blog.findByIdAndUpdate(
                req.params.id, 
                { title, content, category },  // ✅ Update category too
                { new: true }
            );
            if (!blog) {
                return res.status(404).json({ message: "Blog not found" });
            }
            res.status(200).json({ message: "Blog updated successfully", blog });
        } catch (error) {
            console.error("Error updating blog: ", error);
            res.status(500).json({ message: "Error updating blog post" });
        }
    });
    

    router.delete('/delete/:id', async(req, res) => {
        try{
            const blog = await Blog.findByIdAndDelete(req.params.id);
            if (!blog){
                return res.status(404).json({message: "Blog deleted successfully"});
            }
            res.status(200).json({message: "Blog deleted successfully"});
        } catch (error){
            console.error("Error deleting blog: ", error);
            res.status(500).json({message: "Error deleting blog post"});
        }
    });

    router.get('/', async(req, res) => {
        try{
            const {search, category} = req.query;
            let filter = {};

            if (search){
                filter.$or= [
                    {title: {$regex: search, $options: "i"}},
                    {content: {$regex: search, $options: "i"}}
                ];
            }
            if (category){
                filter.category = category;
            }

            const blogs = await Blog.find(filter);
            res.json(blogs);
        } catch (error){
            res.status(500).json({message: "Server error"});
        }
    });

    module.exports = router;
