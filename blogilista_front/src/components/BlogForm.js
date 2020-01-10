import React from 'react'
import { connect } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

const BlogForm = (props) => {

  const addBlog = async event => {
    event.preventDefault()
    const title = event.target.title.value
    const author = event.target.author.value
    const url = event.target.url.value
    const likes = event.target.likes.value
    const blogObject = {
      title,
      author,
      url,
      likes
    }
    props.createBlog({ newObject: blogObject, token: props.user.token })
    props.setNotification(`You added the blog ${title} by ${author}`)
  }

  return(
    <form onSubmit={addBlog}>
      <div>Title: <input name="title"/></div>
      <div>Author: <input name="author"/></div>
      <div>Url: <input name="url"/></div>
      <div>Likes: <input name="likes"/></div>
      <br></br>
      <button>add blog</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { createBlog, setNotification })(BlogForm)
