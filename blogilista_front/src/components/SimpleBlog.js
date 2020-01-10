import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
  <div>
    <div className='titleDiv'>
      {blog.title} {blog.author}
    </div>
    <div className='likesDiv'>
      blog has {blog.likes} likes
      <button onClick={onClick}>like</button>
    </div>
  </div>
)

export default SimpleBlog