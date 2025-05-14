// src/components/Dashboard/KPICards.jsx
import React, { useContext } from 'react';
import ShipsContext from '../../contexts/ShipsContext';  // Import ShipsContext

const KPICards = () => {
  const { ships } = useContext(ShipsContext);  // Access ships from context

  if (!ships) {
    return <div>Loading...</div>;  // Optionally show a loading state if ships data is not available
  }

  const totalShips = ships.length;
  const overdueJobs = 0;  // Replace with your job-related logic
  const jobsInProgress = 0;  // Replace with your job-related logic
  const completedJobs = 0;  // Replace with your job-related logic

  return (
    <div className="kpi-cards">
      <div className="kpi-card">
        <h3>Total Ships</h3>
        <p>{totalShips}</p>
      </div>
      <div className="kpi-card">
        <h3>Overdue Jobs</h3>
        <p>{overdueJobs}</p>
      </div>
      <div className="kpi-card">
        <h3>Jobs in Progress</h3>
        <p>{jobsInProgress}</p>
      </div>
      <div className="kpi-card">
        <h3>Completed Jobs</h3>
        <p>{completedJobs}</p>
      </div>
    </div>
  );
};

export default KPICards;
