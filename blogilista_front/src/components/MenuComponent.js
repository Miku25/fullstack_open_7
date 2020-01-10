import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MenuComponent = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      <Menu inverted >
        <Menu.Item link>
          <Link to="/">blogs</Link>
        </Menu.Item>
        <Menu.Item link>
          <Link to="/users">users</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default MenuComponent