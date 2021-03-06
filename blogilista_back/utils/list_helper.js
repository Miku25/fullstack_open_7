const dummy = () => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.map(blog => blog.likes)
      .reduce((acc, cur) => acc + cur, 0
      )
}

module.exports = {
  dummy,
  totalLikes
}