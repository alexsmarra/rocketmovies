/* Para trabalhar com requisições http, para conseguir consumir requisições com post, get, 
delete, etc.  */
import axios from 'axios'

export const api = axios.create({
   /* endereço que está rodando em nosso computador, quando precisamos de algumas informação do 
   backend, precisamos desse endereço, seria o nosso servidor, nesse caso. Quando precisarmos de 
   alguma rota, basta usarmos por exemplo: api.get(/users/id) */
   baseURL: 'https://rocketmovies-api-kiv3.onrender.com'
})