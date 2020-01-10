import React from 'react'
import { connect } from 'react-redux'

const Logout = (props) => {

  const logout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    window.location.reload()
  }

  return (
    <p>{props.user.name} logged in <button onClick={logout}>logout</button> </p>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Logout)