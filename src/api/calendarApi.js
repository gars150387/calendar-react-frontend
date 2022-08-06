import axios from 'axios'
// import { env } from 'process'
// const { REACT_APP_API_URL } = getEnvVariables()


const calendarApi = axios.create({
    baseURL: 'http://localhost:3050/api'

})



//todo: configuarar interceptores

export default calendarApi