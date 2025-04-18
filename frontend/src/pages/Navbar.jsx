import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  }

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
  return (
    <div> 
        <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
                Resolute
            </div>

            <div className="flex space-x-8 text-lg">
                <Link to="/" className="hover:text-gray-400">Blogs</Link>
                {isLoggedIn ? (
                  <>
                    <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
                    <Link to="/create" className="hover:text-gray-400">New</Link>  
                    <button onClick={handleLogout} className="hover:text-gray-400 cursor-pointer">Logout</button>  
                  </>                
                ): (
                  <Link to="/login" className="hover:text-gray-400">Login</Link>
                )}
            </div>
        </nav>
    </div>
  )
}

export default Navbar
