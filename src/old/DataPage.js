import React, { useState, useEffect } from "react";
import axios from 'axios';
import cheerio from 'cheerio';

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/scrape');

    const { pageTitle, awayTeamName } = response.data;
    console.log('Page Title:', pageTitle);
    console.log('Away Team Name:', awayTeamName);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default SearchPage;