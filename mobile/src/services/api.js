import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.2:666/'
});

export default api;