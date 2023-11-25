import React, { useState } from 'react';
import Sidebar from '../Sidebar/PatientSidebar';
import './SearchDoctor.css';
import { Link } from 'react-router-dom';

const SearchDoctor = () => {
  const [doctorsData, setDoctorsData] = useState([
    {
      id: 1,
      name: 'John Doe',
      department: 'Cardiologist',
    },
    {
        id: 2,
        name: 'Doe',
        department: 'Gynacologist',
      },
    // Add more doctor data
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = doctorsData.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.department.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <h1>Search for a Doctor</h1>
        <input className='searchdoctor'
          type="text"
          placeholder="Search by Name or Department"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {searchResults.length > 0 ? (
          <div>
            {searchResults.map((doctor) => (
              <Link to={`/patient/doctor/${doctor.id}`} key={doctor.id}>
                <div className="doctor-card">
                  <h2>{doctor.name}</h2>
                  <p>Specialty: {doctor.department}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>No doctors found. Try a different search query.</p>
        )}
      </div>
    </div>
  );
};

export default SearchDoctor;
