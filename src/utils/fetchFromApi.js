import axios from 'axios';


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: { maxResults: '50' },
    headers: {
      'X-RapidAPI-Key':  '473f0d2c00msh5a26effacbe6ae9p11383djsnb02aedd3cf95',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

 export const fetchFromApi = async (url) => {
      const {data} =  await axios.get(`${BASE_URL}/${url}`, options);
        return data;
    }

 