import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> 
        <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
                Resolute
            </div>

            <div className="flex space-x-8 text-lg">
                <Link to="/" className="hover:text-gray-400">Blogs</Link>
                <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
                <Link to="/create" className="hover:text-gray-400">New</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
