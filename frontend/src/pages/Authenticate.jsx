import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"

const Authenticate = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("username", username);
        try{
            const response = await axios.post("http://localhost:7000/login", {
                username: username,
                password: password,
            });
            console.log('Login successful', response.data);
            const token = response.data.token;
            localStorage.setItem('token', token);
            if (!token){
                navigate('/login');
            }
            navigate('/dashboard');
        } catch (error){
            console.error("Login failed: ", error.response?.data || error.message);
        }
    };

  return ( 
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 w-150">
        <div className="flex flex-col">
          <h4 className="w-32 text-left py-2">Enter Username: </h4>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter Username..." className = "border p-2"/>
        </div>
        <div className="flex flex-col">
          <h4 className="text-left py-2">Enter Password: </h4>
          <input type="password" value={password} onChange = {e => setPassword(e.target.value)} placeholder="Enter Password..." className = "border p-2"/>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  )
}

export default Authenticate
