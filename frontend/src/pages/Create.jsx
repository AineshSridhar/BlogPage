import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [about, setAbout] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:7000/api/blogs/add-post', 
                { title, about, content, category },
                {
                    headers:{
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log("Published!");
            setTitle("");
            setContent("");
            navigate('/dashboard');
        } catch (error){
            console.error("Error publishing blog: ", error);
        }
    }


  return (
    <div className="px-40 pt-10 border text-xl">
        <h1 className="text-3xl font-bold mb-2">Speak your thoughts!</h1>
        <form onSubmit={handleSubmit} className="flex flex-col text-left">
            <div className="my-4">
                <label htmlFor="title" className="">Title: </label>
                <input type="text" name="title" value={title} className="px-2 py-1 w-100" placeholder="Enter title..." onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className="mb-5">
                <label htmlFor="category" className="mb-1">Category: </label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="text-gray-500 text-xl">
                    <option value="">Select Category</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Tech">Tech</option>
                </select>
            </div>
            <label htmlFor="content" className="mb-4">Content: </label>
            <textarea name = "content" className="h-100 px-2 py-2 mb-6" placeholder="Enter blog content..." onChange={(e) => setContent(e.target.value)}></textarea>
            <label htmlFor="title" className="mb-3">About: </label>
            <input type="text" name="about" value={about} className="px-2 py-2" placeholder="Enter a line or two about your blog..." onChange={(e) => setAbout(e.target.value)}></input>
            <div className="flex justify-end">
                <button type="submit" className="bg-red-700 mt-4 text-white py-1 px-2 rounded mb-6">Publish</button>
            </div>
        </form>
    </div>
  )
}

export default Create
