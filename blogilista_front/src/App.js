import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import BlogList from './components/BlogList'
import Logout from './components/Logout'
import UserList from './components/UserList'
import User from './components/User'
import Blog from './components/Blog'
import MenuComponent from './components/MenuComponent'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { setNotification } from './reducers/notificationReducer'
import { initBlogs } from './reducers/blogReducer'
import { initUsers } from './reducers/usersReducer'
import { setUser } from './reducers/loginReducer'

const App = (props) => {

  useEffect(() => {
    props.initBlogs()
    props.initUsers()
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      props.setUser(user)
    }
  }, [])

  const userById = (id) =>
    props.users.find(u => u.id === id)

  const blogById = (id) =>
    props.blogs.find(u => u.id === id)

  return (
    <div>
      <Container>
        <div>
        <Router>
          <div>
            <br></br>
            <Notification />
            {props.user === null
              ? <LoginForm />
              : <div>
                <MenuComponent />
                <br></br>
                <Route path="/" render={() => <Logout />} />
                <Route exact path="/" render={() =>
                  <Togglable buttonLabel="new blog" >
                    <BlogForm />
                  </Togglable>
                } />
                <Route exact path="/" render={() => <br></br>} />
                <Route exact path="/" render={() => <h2>Blogs</h2>} />
                <Route exact path="/users" render={() => <UserList />} />
                <Route exact path="/" render={() => <br></br>} />
                <Route exact path="/" render={() => <BlogList />} />
                <Route exact path="/users/:id" render={({ match }) =>
                  <User user={userById(match.params.id)}/>
                } />
                <Route exact path="/blogs/:id" render={({ match }) =>
                  <Blog blog={blogById(match.params.id)}/>
                } />
              </div>
            }
          </div>
        </Router>
        </div>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    users: state.users,
    blogs: state.blogs
  }
}

export default connect(mapStateToProps, { setNotification, initBlogs, initUsers, setUser })(App)
