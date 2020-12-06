import axios from 'axios'

const KEY = 'AIzaSyAsUCu5mu1e3PAAVru-g94m9YpVnZvfgB8'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
