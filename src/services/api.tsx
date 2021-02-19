import axios from 'axios';

const api = axios.create({
    baseURL: 'https://g6rentcar.azurewebsites.net'
})

export default api;