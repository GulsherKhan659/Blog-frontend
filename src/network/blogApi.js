import axios from 'axios'


const apiUrl = 'https://blog-backend-gulsherkhan.vercel.app/api/blog'

const getURL = () => {

    return axios.get(apiUrl)
}

const postURL = (data) => {
    return axios.post(apiUrl, data)
}

const editURL = (id, data) => {
    return axios.post(apiUrl.concat('/').concat(id), data)
}

const deltURL = (id) => {
    return axios.post(apiUrl.concat(id))
}

const Network = {
    'get': getURL,
    'post': postURL,
    'edit': editURL,
    'delete': deltURL
}

export default Network
