import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID VExanPlKD9_MjHqdhZuMpyvQrcAS9mmoWZr-8oC66Ws'
    }
})
