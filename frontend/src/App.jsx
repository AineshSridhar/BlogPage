import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import './App.css'
import BlogDetails from "./pages/BlogDetails";
import Home from "./pages/Home.jsx";
import Login from "./pages/Authenticate.jsx"
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/blog/:id" element = {<BlogDetails />} />
      </Routes>
    </Router> 
  )
}

export default App;