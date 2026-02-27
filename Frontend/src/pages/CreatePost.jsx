import React from 'react'

const CreatePost = () => {
  return (
    <div className='bg-gray-700 flex h-screen items-center justify-center'>
          <div className='flex flex-col gap-4 bg-gray-800 p-8 rounded-lg'>
            <h1 className='text-3xl text-center font-bold text-white'>Create Post</h1>
             <form className='flex gap-4  flex-col' action="">
                <input className='bg-white py-2 rounded-l px-3' type="file" />
                <input className='bg-white py-2 rounded-l px-3' type="text" placeholder='Enter caption...' />
                <button className='bg-blue-500 text-white px-4 py-2 rounded'>Create</button>
             </form>
          </div>
    </div>
  )
}

export default CreatePost