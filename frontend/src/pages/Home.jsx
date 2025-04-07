import React, {useState} from "react";
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
    <div>
  
    </div>
  )
}

export default `Home`
