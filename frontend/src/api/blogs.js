import axios from "axios"

const API_URL = "http://localhost:5000/api"

export const fetchBlogs = async(filters = {}) => { 
    const { search, category } = filters;
    const params = URLSearchParams(search, category);
    const response = await axios.get(`${API_URL}/blogs?${params}`);
    return response.data;
}