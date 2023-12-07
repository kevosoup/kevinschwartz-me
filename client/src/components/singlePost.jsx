import React from 'react'

export default function singlePost() {
  return (
    <div className='singlePost w-[80%] m-5 font-secondary'>
        <img className='singlePostImg w-full h-[300px] mb-5 rounded object-cover' src="https://placehold.it/500x500" alt="" />
        <h1 className='singlePostTitle text-center mb-1 text-xl font-primary '>
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit float-right text-sm">
                <i className="singlePostIcon fa-solid fa-pen-to-square mr-1"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>

        <div className="singlePostInfo mb-5 flex justify-between text-xs text-blue-900">
            <span className='singlePostAuthor | tracking-tight'>Author: <b>Kevin</b></span>
            <span className='singlePostDate | tracking-tight'>1 hour ago</span>
        </div>

        <p className='first-letter:ml-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur possimus eaque voluptate ex nesciunt quaerat aspernatur vero est maiores aliquid suscipit, unde, iure doloribus amet. Assumenda quo commodi amet nulla!</p>
    </div>
  )
}
