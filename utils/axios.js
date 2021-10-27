import axios from 'axios'

export default axios.create({
    baseURL: 'https://happy-poitras-49f3a7.netlify.app/',
    headers: {
      'Content-Type': 'application/json',
    },
  });
