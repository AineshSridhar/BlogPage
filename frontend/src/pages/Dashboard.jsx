import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchMyBlogs = async() => {
            const response = await axios.get("/api/blogs/myblogs", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          setBlogs(response.data.blogs);
        }
        fetchMyBlogs();
    }, [])
  return (
    <div>
      {blogs.map(blog => (
        <div key={blog._id}>
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
