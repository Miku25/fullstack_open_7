import React from 'react'
import { connect } from 'react-redux'
import  { useField } from '../hooks/index'
import { setNotification } from '../reducers/notificationReducer'
import { login } from '../reducers/loginReducer'

const LoginForm = (props) => {
  const username = useField('text')
  const password = useField('password')

  const handleLoginEvent = (event) => {
    event.preventDefault()
    password.reset()
    console.log(username.input.value)
    console.log(password.input.value)
    props.login(username.input.value, password.input.value)
  }

  return(
    <form onSubmit={handleLoginEvent}>
      <div>
        username:
        <input  {...username.input} />
      </div>
      <div>
        password:
        <input  {...password.input} />
      </div>
      <button type="submit">login</button>
    </form>
  )
}

export default connect(null, { setNotification, login })(LoginForm)