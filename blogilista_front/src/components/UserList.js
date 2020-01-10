import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const UserList = (props) => {

  /* const users = userService.getAll()

  console.log(users)
 */
  return (
    <div>
      <h2>Users</h2>
      {props.users.map(user =>
        <div key={user.id}>
          <div>
            <Link to={`/users/${user.id}`}>{user.name} has added {user.blogs.length} blogs</Link>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserList)