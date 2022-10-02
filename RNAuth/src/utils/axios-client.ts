import axios from 'axios'

import { getStorageItem } from './storage'

const axiosClient = axios.create({
  baseURL: 'http://192.168.101.2:8000/api/v1',
})
axiosClient.interceptors.request.use(
  config => {
    const token = getStorageItem('token')
    if (!token) {
      return config
    }
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  },
  error => Promise.reject(error),
)
export { axiosClient }
