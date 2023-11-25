import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/DoctorSidebar';
import './Consultations.css'; 

const Consultations = () => {
  const [consultations, setConsultations] = useState([]);

  // Simulated data (replace with actual API calls)
  useEffect(() => {
    // Fetch appointments from your API here
    // Example data (replace with actual data retrieval):
    const exampleConsultations = [
      { id: 1, patientName: 'John Doe', consultationTime: '2023-10-31 10:00 AM' },
      { id: 2, patientName: 'Jane Smith', consultationTime: '2023-11-01 2:30 PM' },
      // Add more appointment data
    ];

    setConsultations(exampleConsultations);
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <h2>Consultations</h2>
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Consultations ID</th>
              <th>Patient Name</th>
              <th>Consultations Time</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map(consultation => (
              <tr key={consultation.id}>
                <td>{consultation.id}</td>
                <td>{consultation.patientName}</td>
                <td>{consultation.consultationTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Consultations;
