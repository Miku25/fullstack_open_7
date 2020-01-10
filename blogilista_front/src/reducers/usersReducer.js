import userService from '../services/users'

export const initUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    console.log(users)
    dispatch({
      type: 'INIT_USERS',
      data: users
    })
  }
}

const usersReducer = (state = [], action) => {
  //console.log('state now: ', state)
  //console.log('action', action)
  switch (action.type) {
  case 'INIT_USERS':
    //console.log('Got to INIT_USERS')
    return state.concat(action.data)
  default:
    //console.log('Reached usersReducer default')
    return state
  }
}

export default usersReducer