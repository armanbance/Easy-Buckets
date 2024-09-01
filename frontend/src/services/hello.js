import axios from 'axios'
const baseUrl = '/api/hello' //or just users?

const hello = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default {hello}; 