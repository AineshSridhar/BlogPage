import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import './App.css'
import BlogDetails from "./pages/BlogDetails";
import Home from "./pages/Home.jsx";
import Login from "./pages/Authenticate.jsx"
import Dashboard from "./pages/Dashboard.jsx";
import Create from "./pages/Create.jsx";
import Navbar from "./pages/Navbar.jsx";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>} />
        <Route path = "/create" element = {<Create/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/blog/:id" element = {<BlogDetails />} />
      </Routes>
    </Router> 
  )
}

export default App;