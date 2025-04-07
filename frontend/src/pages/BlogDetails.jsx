import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api";

function blogDetails(){
    const {id} = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async() => {
            const response = await axios.get(`${API_URL}/blogs/${id}`);
            setBlog(response.data);
        };
        fetchBlog();
    }, [id]);

    if (!blog) return <p>Loading...</p>

    return(
        <div className = "p-6">
            <h1 className = "text-3xl font-bold">{blog.title}</h1>
            <p className = "text-gray-600">{blog.content}</p>
        </div>
    )
}

export default blogDetails;