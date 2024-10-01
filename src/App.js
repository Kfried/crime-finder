import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CrimeFilter from './components/CrimeFilter';
import CrimeMap from './components/CrimeMap';
import './App.css';

function App()
{
  const [crimeCategories, setCrimeCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [crimeData, setCrimeData] = useState([]);

  useEffect(() =>
  {
    // Fetch crime categories
    axios.get('https://data.police.uk/api/crime-categories')
      .then(response =>
      {
        setCrimeCategories(response.data);
      })
      .catch(error => console.error('Error fetching crime categories:', error));
  }, []);

  useEffect(() =>
  {
    if (selectedCategory)
    {
      // Fetch crime data for selected category
      // Note: Using a fixed location (central London) and date for this example
      axios.get(`https://data.police.uk/api/crimes-street/${selectedCategory}?lat=51.5074&lng=-0.1278&date=2023-03`)
        .then(response =>
        {
          setCrimeData(response.data);
        })
        .catch(error => console.error('Error fetching crime data:', error));
    }
  }, [selectedCategory]);

  return (
    <div className="App">
      <h1>UK Crime Map</h1>
      <CrimeFilter
        categories={crimeCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <CrimeMap crimeData={crimeData} />
    </div>
  );
}

export default App;