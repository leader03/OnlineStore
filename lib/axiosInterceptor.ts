import axios from 'axios'

const axiosClient = axios.create()

axiosClient.defaults.baseURL = "https://fakestoreapi.com"

export const BASE_URL = 'https://fakestoreapi.com'

export default axiosClient