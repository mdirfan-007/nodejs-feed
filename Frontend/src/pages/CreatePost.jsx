import React from 'react'
import axios from 'axios';

const CreatePost = () => {
  const handleSubmit = (e) =>{
    e.preventDefault()
    const formData =  new FormData(e.target)
    axios.post('http://localhost:3000/create-post',formData).then((res)=>{
            console.log(res);

    })
      
    
  }
  return (
    <div className='bg-gray-700 flex h-screen items-center justify-center'>
          <div className='flex flex-col gap-4 bg-gray-800 p-8 rounded-lg'>
            <h1 className='text-3xl text-center font-bold text-white'>Create Post</h1>
             <form onSubmit={handleSubmit} className='flex gap-4  flex-col' action="">
                <input className='bg-white py-2 rounded-l px-3' name='image' type="file" accept='image/*' />
                <input className='bg-white py-2 rounded-l px-3' type="text" placeholder='Enter caption...' />
                <button className='bg-blue-500 text-white px-4 py-2 rounded'>Create</button>
             </form>
          </div>
    </div>
  )
}

export default CreatePost