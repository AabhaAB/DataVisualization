import axios from 'axios';

export const API_BASE_URL = 'http://localhost:8086';

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url, {
      responseType: 'json'
    });
    console.log(response.data); 
    return response.data;
  } 
  catch (error) {
    console.error(error);
    return null;
  }
};