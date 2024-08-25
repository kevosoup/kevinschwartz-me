import React from 'react'
import {Link} from 'react-router-dom';

export default function Post({post}) {
  return (
    <div className="post w-[385px] mx-auto mb-5">
        {/* <img className="postImg w-full h-[280px] object-cover rounded" src="https://via.placeholder.com/400x400" alt="Post Image" /> */}
        {post.photo && (
          <img
            className="postImg"
            src={post.photo}
            alt=""
          />
        )}
        <div className="postInfo flex flex-col items-center">
            <div className="postCats">
                {post.categories.map(c =>
                  <span className="blogPost text-xs underline tracking-tight mt-1 mr-1">{c.name}</span>
                )}
            </div>
            <Link to={`/post/${post._id}`}>
              <span className="postTitle font-primary uppercase text-lg">{post.title}</span>
            </Link>
            <hr />
            <span className="postDate text-xs italic">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDescription mt-1 leading-6 text-sm overflow-hidden line-clamp-3">
          {post.desc}
        </p>
    </div>
  )
}
