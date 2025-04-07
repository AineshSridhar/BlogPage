import React, {useEffect, useState} from "react";
import { fetchBlogs } from "../api/blogs";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const loadBlogs = async() => {
      try{
        const data = await fetchBlogs({search, category});
        setBlogs(data || []);
      } catch (error){
        console.error("Error loading blogs");
      }
    };
    loadBlogs();
  }, [search, category]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Blogs</h1>

      {/* Search and filter */}
      <div className="flex gap-4 mb-6">
        <input 
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="border p-2" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All categories</option>
          <option value="tech">Tech</option>
          <option value="lifestyle">Lifestyle</option>
        </select>
      </div>

      <div>
        <div className="grid gap-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="p-4 border rounded-lg">
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p>{blog.content}</p>
              <a href ={`blog/${blog._id}`} className="text-bold-500">
              Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;
