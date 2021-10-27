import axios from 'axios'

export default axios.create({
    baseURL: 'https://api-pollin.herokuapp.com/',
    headers: {
      'Content-Type': 'application/json',
    },
  });