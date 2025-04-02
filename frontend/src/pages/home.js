import { useEffect, useState } from "react";
import {fetchBlogs} from "../api/blogs";

function home(){
    const [blogs, setBlogs] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        const loadBlogs = async() => {
            const data = await fetchBlogs({search, category});
            setBlogs(data);
        };
        loadBlogs();
    }, [search, category]);

    return(
        <div className = "p-6">
            <h1 className = "text-3xl font-bold mb-4">Blogs</h1>

            {/* Search and filter */}
            <div className = "flex gap-4 mb-6">
                <input type="text" placeholder="Search..." className = "border p-2" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <select className = "border p-2" onChange={(e) => setCategory(e.target.value)}>
                    <option value = "">All Categories</option>
                    <option value = "tech">Tech</option>
                    <option value = "lifestyle">Lifestyle</option>
                </select>
            </div>

            {/* Blog list */}
            <div className = "grid gap-4">
                {blogs.map((blog) => (
                    <div key = {blog._id} className = "p-4 border-rounded">
                        <h2 className = "text-xl font-bold">{blog.title}</h2>
                        <p>{blog.summary}</p>
                        <a href = {`/blog/${blog_.id}`} className = "text-blue-500">Read more</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default home;