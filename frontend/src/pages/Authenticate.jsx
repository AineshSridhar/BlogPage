import React, { useState } from 'react'

const Authenticate = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("username");
        try{
            const response = await axios.post("http://localhost:7000/login", {
                username: username,
                password: password,
            });
            console.log('Login successful', response.data);
        } catch (error){
            console.error("Login failed: ", error.response?.data || error.message);
        }
    };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <h4>Enter Username: </h4>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter Username..." className = "border p-2"/>
        <h4>Enter Password: </h4>
        <input type="password" value={password} onChange = {e => setPassword(e.target.value)} placeholder="Enter Password..." className = "border p-2"/>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  )
}

export default Authenticate
