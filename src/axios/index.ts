import axios from "axios";

/** constants for api */
const API_CONSTANTS = {
    LOCALHOST: 'http://localhost:8000'
}

/** axios instance */
export const api = axios.create({
    baseURL: API_CONSTANTS.LOCALHOST,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': true
    },
});