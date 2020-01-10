import React from 'react'

const User = ({ user }) => {
  if ( user === undefined) {
    return null
  }

  return (
    <div>
      <h2>{user.name}</h2>
      {user.blogs.map(blog =>
        <div key={blog.id}>
          <div>
            {blog.title} by {blog.author}
          </div>
        </div>
      )}
    </div>
  )
}

export default User