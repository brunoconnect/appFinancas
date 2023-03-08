import axios from 'axios';

const api = axios.create({
    // Quando estou usando um api que esta em localhost o react native nao deixa a gente fazer requisições que estao em http só podemos fazer requisições https
    // A solução é usar o ip da maquina - abre o cmd e comando ipconfig

    // baseURL: 'http://localhost:3333'
    baseURL: 'http://192.168.0.61:3333'
})

export default api;