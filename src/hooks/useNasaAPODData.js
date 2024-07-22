import { useEffect, useState, useCallback } from 'react';

// API key and URL for NASA's Astronomy Picture of the Day (APOD) API
const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

const useNasaAPODData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch data from the NASA APOD API
  const fetchNasaAPODData = useCallback(async () => {
    const today = new Date().toDateString();
    const localKey = `NASA-APOD-${today}`;
    const cachedData = localStorage.getItem(localKey);

    // If cached data is available, use it
    if (cachedData) {
      setData(JSON.parse(cachedData));
      setLoading(false);
      console.log('Fetched from cache');
      return;
    }

    // If no cached data, fetch from the API
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      const apiData = await response.json();
      localStorage.setItem(localKey, JSON.stringify(apiData));
      setData(apiData);
      console.log('Fetched from API');
    } catch (error) {
      setError(error.message);
      console.error(`Failed to fetch NASA APOD data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, []);

  // useEffect to call the fetch function when the component mounts
  useEffect(() => {
    console.log('Custom hook: useNasaAPODData');
    fetchNasaAPODData();
  }, [fetchNasaAPODData]);

  return { data, error, loading };
};

export default useNasaAPODData;
