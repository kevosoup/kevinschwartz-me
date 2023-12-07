import React from 'react'

export default function Post() {
  return (
    <div className="post w-[385px] mx-auto mb-5">
        <img className="postImg w-full h-[280px] object-cover rounded" src="https://via.placeholder.com/400x400" alt="Post Image" />
        <div className="postInfo flex flex-col items-center">
            <div className="blogPosts">
                <span className="blogPost text-xs underline tracking-tight mt-1 mr-1">Frontend</span>
                <span className="blogPost text-xs underline tracking-tight mt-1 mr-1">UX</span>
            </div>
            <span className="postTitle font-primary uppercase text-lg">This is a post title</span>
            <hr />
            <span className="postDate text-xs italic">1 hour ago</span>
        </div>
        <p className="postDescription mt-1 leading-6 text-sm overflow-hidden line-clamp-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae magnam eos nihil fugit exercitationem pariatur doloribus! Repellat, corporis! Voluptatem accusamus ipsa praesentium quaerat rerum repudiandae provident a hic, quam veritatis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae magnam eos nihil fugit exercitationem pariatur doloribus! Repellat, corporis! Voluptatem accusamus ipsa praesentium quaerat rerum repudiandae provident a hic, quam veritatis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae magnam eos nihil fugit exercitationem pariatur doloribus! Repellat, corporis! Voluptatem accusamus ipsa praesentium quaerat rerum repudiandae provident a hic, quam veritatis.</p>
    </div>
  )
}
