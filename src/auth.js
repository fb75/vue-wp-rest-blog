import axios from 'axios'

const instance = axios.defaults.headers['Authorization'] = localStorage.jwt

export default instance