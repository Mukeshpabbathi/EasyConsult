import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/DoctorSidebar';
import { Link } from 'react-router-dom';
import './Home.css'; 

const DoctorHomePage = () => {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);

  // Simulated data (replace with actual API calls)
  useEffect(() => {
    // Fetch appointments and patients from your API here
    // Example data (replace with actual data retrieval):
    const exampleAppointments = [
      { id: 1, patientName: 'John Doe', appointmentTime: '2023-10-31 10:00 AM' },
      { id: 2, patientName: 'Jane Smith', appointmentTime: '2023-11-01 2:30 PM' },
    ];

    const examplePatients = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      // Add more patient data
    ];

    setAppointments(exampleAppointments);
    setPatients(examplePatients);
  }, []);

  return (
    <div>
      <Sidebar />
      <div className='main-content'>
        <h1>Dashboard</h1>
        
        {/* Display Appointments */}
        <AppointmentsList appointments={appointments} />

        {/* Display Patients List */}
        <PatientsList patients={patients} />
      </div>
    </div>
  );
};

const AppointmentsList = ({ appointments }) => {
  return (
    <div>
      <h2>Upcoming Appointments</h2>
      <ul className="appointment-list">
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.patientName} - {appointment.appointmentTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PatientsList = ({ patients }) => {
  return (
    <div>
      <h2>Patients List</h2>
      <ul className="patients-list">
        {patients.map(patient => (
          <li key={patient.id}>
            <Link to={`/doctor/patients/${patient.id}`}>{patient.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorHomePage;
