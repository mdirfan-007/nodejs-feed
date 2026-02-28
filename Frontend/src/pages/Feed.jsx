import React, { useEffect, useState } from "react";
import axios from 'axios';


const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/27289150/pexels-photo-27289150.jpeg",
      caption: "Post Title 1",
    },
  ]);

  useEffect(() => {
    const data = axios.get('http://localhost:3000/get-post').then((response) => {
      setPosts(response.data.posts);
      
      
    }
     

   )}, [])
  

  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
      {posts.map((posts) => (
        <div className="h-[20rem] w-[14rem] p-3 mt-2 rounded-2xl  bg-white" key={posts.id}>
          <img className=" mb-3 rounded-xl" src={posts.image} alt={posts.caption} />
          <h2 className="text-sm font-semibold">{posts.caption}</h2>
        </div>
      ))}
    </div>
  );
};

export default Feed;
