import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api/index';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {

  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const countries = await fetchCountries();
      setCountryData(countries);
    }
    fetchAPI();
  }, [setCountryData])

  console.log(countryData);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="global">Global</option>
        { countryData ? countryData.map((country, index) => {
          return <option key={index} value={country}>{country}</option>
        }) : null}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;