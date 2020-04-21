import axios from 'axios';

// The API that we will call on for COVID19 data
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    
    const response = await axios.get(url);
    return response;

  } catch (error) {
    console.log(error);
  }
}

