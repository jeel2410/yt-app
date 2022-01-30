import axios from "axios"
const KEY='AIzaSyBT_Ka-86iRlUB-4YsGaiBBMfZKcaP5lTY'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})