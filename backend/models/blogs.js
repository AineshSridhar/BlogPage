const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author_name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog;

