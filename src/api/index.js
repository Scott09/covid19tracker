import axios from 'axios';

// The API that we will call on for COVID19 data
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  try {

    let modifiedURL = url;
    if (country) {
      modifiedURL = `${url}/countries/${country}`;
    }

    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(modifiedURL);
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

export const fetchDailyData = async () => {
  try {

    const { data } = await axios.get(`${url}/daily`);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));

  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

