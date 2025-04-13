import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Dashboard = () => {
    
    // const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchMyBlogs = async() => {
            const response = await axios.get("http://localhost:7000/api/blogs/myblogs", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          setBlogs(response.data);
          console.log(response);
        }
        fetchMyBlogs();
    }, [])
    
  return (
    <div>
      {blogs.map(blog => (
        <div className="border rounded" key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <button onClick={() => handleEdit(blog._id)}>Edit</button>
          <button onClick={() => handleDelete(blog._id)}>Delete</button>
        </div>
      ))}
      <button onClick={() => navigate('/create')}>Create New Blog</button>
    </div>
  ) 
}

export default Dashboard
