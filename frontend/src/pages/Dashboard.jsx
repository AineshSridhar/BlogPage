import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Dashboard = () => {
    
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    
    const fetchMyBlogs = async() => {
      const response = await axios.get("http://localhost:7000/api/blogs/myblogs", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setBlogs(response.data);
    console.log(response);
  }

    useEffect(() => {
      const authorDetails = async() => {
        const response = await axios.get("http://localhost:7000/user");

      }
      authorDetails();
      fetchMyBlogs();
    }, [])

    const handleDelete = async(id) => {
      try{
        await axios.delete(`http://localhost:7000/api/blogs/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        console.log("Blog deleted!");
        fetchMyBlogs();
      } catch (error){
        console.error("Error deleting blog: ", error);
      }
    }
    
  return (
    <div className="flex space-x-8 mt-10 px-20">
      <div className="w-1/4 bg-black text-white rounded-lg">
        <img src="/Dp1.jpg" className="w-100 object-cover rounded"></img>
        <h2 className="">{authorI}</h2>
        <p></p>
        
      </div>
      
      <div className="w-3/4">
        <div className="flex justify-end">
          <button className="bg-red-700 text-white py-1 px-2 rounded mb-4 cursor-pointer" onClick={() => navigate('/create')}>+ New Blog</button>
        </div>
        {blogs.map(blog => (
          <div className="border rounded-lg px-5 py-2 mb-3" key={blog._id}>
            <div className="flex justify-between items-center">
              <h2 className="py-2 font-bold truncate max-w-2xl">{blog.title}</h2>
              <div className="space-x-3">
                <button className="bg-green-600 text-white py-1 px-3 rounded cursor-pointer" onClick={() => handleEdit(blog._id)}>Edit</button>
                <button className="bg-red-600 text-white py-1 px-3 rounded cursor-pointer" onClick={() => handleDelete(blog._id)}>Delete</button>
              </div>          
            </div>
            <p className='text-left text-sm text-gray-500'>Category: {blog.category}</p>
            <p className="line-clamp-3 text-left break-words whitespace-normal">{blog.about}</p>
          </div>
        ))}
      </div>
    </div>
  ) 
}

export default Dashboard
