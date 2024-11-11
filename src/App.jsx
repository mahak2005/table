// import React, { useEffect, useState } from 'react';
// import DataTable from './components/DataTable';
// import './styles/Table.css';

// const App = () => {
//   const [fishData, setFishData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data from API
//   const fetchData = async () => {
//     try {
//       const response = await fetch('/api/fishData'); // Replace with your actual API endpoint
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       setFishData(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="app-container">
//       <h1>Fish Data Table</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p className="error-message">{error}</p>}
//       {!loading && !error && <DataTable data={fishData} />}
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import DataTable from './components/DataTable';
import './styles/Table.css';

const App = () => {
  const [fishData, setFishData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data to test the table without an API
  const mockFishData = [
    {
      fish_name: 'Bass',
      scientific_name: 'Micropterus salmoides',
      date: '2024-08-23T22:03:56Z',
      depth: 26.46,
      longitude: -16.1392,
      latitude: -59.2224,
      catch_weight: 14.76,
    },
    {
      fish_name: 'Catfish',
      scientific_name: 'Ictalurus punctatus',
      date: '2024-01-30T22:03:56Z',
      depth: 18.09,
      longitude: 136.3931,
      latitude: -6.5788,
      catch_weight: 15.45,
    },
    {
      fish_name: 'Salmon',
      scientific_name: 'Salmo salar',
      date: '2024-01-01T22:03:56Z',
      depth: 2.2,
      longitude: -2.7834,
      latitude: 67.4231,
      catch_weight: 0.69,
    },
    {
      fish_name: 'Trout',
      scientific_name: 'Oncorhynchus mykiss',
      date: '2024-08-19T22:03:56Z',
      depth: 35.68,
      longitude: 75.0773,
      latitude: 17.398,
      catch_weight: 10.32,
    },
    {
      fish_name: 'Pike',
      scientific_name: 'Esox lucius',
      date: '2023-12-12T22:03:56Z',
      depth: 12.6,
      longitude: 24.8392,
      latitude: 51.6783,
      catch_weight: 5.35,
    }
  ];

  useEffect(() => {
    // Simulate data fetching by using setTimeout
    setTimeout(() => {
      setFishData(mockFishData);
      setLoading(false);
    }, 1000); // 1 second delay to simulate API call
  }, []);

  return (
    <div className="app-container">
      <h1>Fish Data Table</h1>
      {loading ? <p>Loading...</p> : <DataTable data={fishData} />}
    </div>
  );
};

export default App;
