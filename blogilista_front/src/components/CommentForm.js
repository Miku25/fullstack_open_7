import React from 'react'
import { connect } from 'react-redux'
import { commentBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

const CommentForm = (props) => {

  const commentBlog = async event => {
    event.preventDefault()
    const comment = event.target.comment.value
    props.commentBlog({ id: props.id, comment: comment })
    setTimeout((() => window.location.reload()), 80)
    //props.setNotification(`You commented the blog ${title} by ${author}`)
  }

  return(
    <form onSubmit={commentBlog}>
      <div>Comment: <input name="comment"/></div>
      <br></br>
      <button>save comment</button>
    </form>
  )
}


export default connect(null, { commentBlog, setNotification })(CommentForm)