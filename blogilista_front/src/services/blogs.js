import axios from 'axios'
const baseUrl = '/api/blogs'

const makeToken = newToken => {
  return(`bearer ${newToken}`)
}

const create = async ({ newObject, tokenToMod }) => {
  const token = makeToken(tokenToMod)
  console.log(token)
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getOne = async(id) => {
  const url = `${baseUrl}/${id}`
  const response = await axios.get(url)
  return response.data
}

const updateLike = async (id) => {
  const object = await getOne(id)
  const updatedObject = { ...object, likes: object.likes+1 }
  const url = `${baseUrl}/${id}`
  const response = await axios.put(url, updatedObject)
  console.log(updatedObject)
  return response.data
}

const updateComment = async ({ id, comment }) => {
  let object = await getOne(id)
  if (object.comments === undefined) {
    object.comment = []
  }
  const updatedObject = { ...object, comments: object.comments.concat(comment) }
  const url = `${baseUrl}/${id}`
  const response = await axios.put(url, updatedObject)
  console.log(updatedObject)
  return response.data
}


export default { getAll, create, makeToken, getOne, updateLike, updateComment }