import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path)
      setPost(res.data)
    }
    getPost();
  },[path]);

  return (
    <div className='singlePost w-[80%] m-5 font-secondary'>
        {post.photo &&(
          <img className='singlePostImg w-full h-[300px] mb-5 rounded object-cover' src={post.photo} alt="" />
        )}
        <h1 className='singlePostTitle text-center mb-1 text-xl font-primary '>
            {post.title}
            <div className="singlePostEdit float-right text-sm">
                <i className="singlePostIcon fa-solid fa-pen-to-square mr-1"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>

        <div className="singlePostInfo mb-5 flex justify-between text-xs text-blue-900">
            <span className='singlePostAuthor | tracking-tight'>Author: {post.username}</span>
            <span className='singlePostDate | tracking-tight'>{new Date(post.createdAt).toDateString()}</span>
        </div>

        <p className='first-letter:ml-5'>
          {post.desc}
        </p>
    </div>
  )
}
