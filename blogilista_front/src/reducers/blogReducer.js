import blogService from '../services/blogs'

export const createBlog = ({ newObject, token }) => {
  console.log(token)
  return async dispatch => {
    const newBlog = await blogService.create({ newObject: newObject, tokenToMod: token })
    dispatch({
      type: 'NEW_BLOG',
      data: newBlog,
    })
  }
}

export const initBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const likeBlog = (id) => {
  return async dispatch => {
    const updatedBlog = await blogService.updateLike(id)
    dispatch({
      type: 'LIKE_BLOG',
      data: { id, updatedBlog: updatedBlog }
    })
  }
}

export const commentBlog = ({ id, comment }) => {
  return async dispatch => {
    const updatedBlog = await blogService.updateComment({ id: id, comment: comment })
    dispatch({
      type: 'COMMENT_BLOG',
      data: { id, updatedBlog: updatedBlog }
    })
  }
}


const blogReducer = (state = [], action) => {
  //console.log('state now: ', state)
  //console.log('action', action)
  switch (action.type) {
  case 'NEW_BLOG':
    return state.concat(action.data)
  case 'INIT_BLOGS':
    //console.log('Got to INIT_BLOGS')
    return state.concat(action.data)
  case 'LIKE_BLOG':
    return state.map(blog =>
      blog.id === action.data.id
        ? action.data.updatedBlog
        : blog
    )
  default:
    //console.log('Reached blogreducer default')
    return state
  }
}

export default blogReducer