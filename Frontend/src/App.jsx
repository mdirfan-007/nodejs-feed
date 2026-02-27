import React from 'react'
import { Links, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <CreatePost/>} />
        <Route path='/feed' element={ <Feed/>} />
      </Routes>
    </div>
  )
}

export default App