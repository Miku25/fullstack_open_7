import React from 'react'
import CommentForm from './CommentForm'
import { likeBlog } from '../reducers/blogReducer'
import { connect } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const Blog = ( props ) => {
  const blog = props.blog

  if ( blog === undefined) {
    return null
  }

  let user
  if (blog.user === undefined || blog.user === null) {
    user = 'Unknown user'
  } else {
    user = blog.user.name
  }

  const handleClick = (blog) => {
    return () => {
      props.likeBlog(blog.id)
      //props.setNotification(`you liked ${blog.title} by ${blog.author}`)
      setTimeout((() => window.location.reload()), 150)
    }
  }

  const commentBlock = () => {
    if (blog.comments !== undefined) {
      return (blog.comments.map(comment => {
        return (<div key={comment}>{comment}</div>)
      }))
    }
  }

  return (
    <div>
      <h2>{blog.title} by {blog.author}</h2>
      {blog.url}
      <br></br>
      {blog.likes} likes &nbsp;
      <button onClick={handleClick(blog)}>like</button>
      <br></br>
      added by {user}
      <CommentForm id={blog.id}/>
      <h2>Comments</h2>
      {commentBlock()}
    </div>
  )
}

export default connect(null, { likeBlog, setNotification })(Blog)