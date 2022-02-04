import axios from 'axios';

export const getQuestions = (url) =>{
    return axios.get(url);
}