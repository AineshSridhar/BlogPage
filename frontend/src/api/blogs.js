import axios from "axios";

export async function fetchBlogs({search =  "", category = ""} = {}){
    try{
        const params = {};
        if (search) params.search = search;
        if (category) params.category = category;

        const response = await axios.get(`${API_URL}/blogs`, {params});
        return response.data;
    } catch (error){
        console.error("Error fetching blogs: ", error);
        res.status(404).json({message: "Error fetching blogs"});
        throw error;
    }
}