import axios from "axios";

const apiVideos = axios.create({
    baseURL:'https://apicovidcontador.marcos-vinicius9.repl.co'
})

export default apiVideos;