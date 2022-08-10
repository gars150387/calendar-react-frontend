import axios from 'axios'
// import { config } from 'dotenv'

const calendarApi = axios.create({
    baseURL: 'http://localhost:3050/api'

})


//todo: configuarar interceptores
calendarApi.interceptors.request.use( config => {


    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})



export default calendarApi