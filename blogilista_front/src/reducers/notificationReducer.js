const initialState = null

export const setNotification = (text) => {
  console.log(`Setting notification ${text}`)
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: text
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: null
      })
    }, 5000)
  }
}

export const clearNotification = () => {
  return setNotification(null)
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    return action.data
  default:
    //console.log('Reached notificationReducer default')
    return state
  }
}

export default notificationReducer