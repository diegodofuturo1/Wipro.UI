import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://localhost:44373/api',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})