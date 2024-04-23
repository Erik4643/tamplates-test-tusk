import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL
const baseAuthURL = process.env.NEXT_PUBLIC_API_URL_AUTH

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
    Accept: 'application/json'
  }
})

api.interceptors.request.use(
  (config) => {
    if (config.oauth) {
      config.baseURL = baseAuthURL
    } else {
      config.baseURL = baseURL
    }

    if (config.formData) {
      config.headers = {
        ...config.headers,
        'Content-Type': 'multipart/form-data'
      }
    } else {
      config.headers = {
        ...config.headers,
        'Content-Type': 'application/json'
      }
    }

    if (config.token) {
      const token = JSON.parse(localStorage.getItem('credentials'))
      if (!token) {
        throw new Error('token not found')
      }
      config.headers = {
        ...config.headers,
        'access-token': `Bearer ${token.access_token}`,
        Authorization: `Bearer ${token.access_token}`
      }
    }

    return config
  },
  (err) => Promise.reject(err)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      localStorage.removeItem('credentials')
      window.location.replace('/sign-in')
    }
    throw error
  }
)

export default api
