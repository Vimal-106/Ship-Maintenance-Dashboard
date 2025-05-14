// src/contexts/JobsContext.jsx
import React, { createContext, useState, useEffect } from 'react';

const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(savedJobs);
  }, []);

  const addJob = (newJob) => {
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
  };

  const deleteJob = (jobId) => {
    const updatedJobs = jobs.filter((job) => job.id !== jobId);
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
  };

  return (
    <JobsContext.Provider value={{ jobs, addJob, deleteJob }}>
      {children}
    </JobsContext.Provider>
  );
};

export default JobsContext;
