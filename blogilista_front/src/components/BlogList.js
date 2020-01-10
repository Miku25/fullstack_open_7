import React from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const BlogList = (props) => {
  return (
    <div>
      <Table striped celled>
        <Table.Body>
          {props.blogs.map(blog =>
            <Table.Row key={blog.id}>
              <Table.Cell>
                <Link to={`/blogs/${blog.id}`}>{blog.title} by {blog.author}</Link>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps)(BlogList)