import loginService from '../services/login'

export const login = (username, password) => {
  return async dispatch => {
    try {
      const user = await loginService.login({
        username, password
      })
      console.log(user)
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      console.log('let\'s see')
      dispatch({
        type: 'LOGIN',
        data: user
      })
    } catch (exception) {
      console.log(exception)
      console.log('Wrong credentials')
    }
  }
}

export const setUser = (user) => {
  return async dispatch => {
    dispatch({
      type: 'SET_USER',
      data: user
    })
  }
}

const loginReducer = (state = null, action) => {
  //console.log('state now: ', state)
  //console.log('action', action)
  switch (action.type) {
  case 'LOGIN':
    //console.log('asdasd', action.data)
    return action.data
  case 'SET_USER':
    //console.log('asdasd', action.data)
    return action.data
  default:
    //console.log('Reached loginReducer default')
    return state
  }
}

export default loginReducer