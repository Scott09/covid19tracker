import axios from 'axios';

// The API that we will call on for COVID19 data
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {

    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate
    }
    return modifiedData;
    
  } catch (error) {
    console.log(error);
  }
}

