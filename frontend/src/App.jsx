import React from 'react'

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

export default App
