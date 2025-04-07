import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import './App.css'
import BlogDetails from "./pages/BlogDetails";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/blog/:id" element = {<BlogDetails />} />
      </Routes>
    </Router> 
  )
}

export default App;