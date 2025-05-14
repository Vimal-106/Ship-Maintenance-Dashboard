// src/components/Jobs/JobList.jsx
import React, { useContext } from 'react';
import JobsContext from '../../contexts/JobsContext';  // Import JobsContext
import './JobList.css';  // CSS for styling the job list

const JobList = () => {
  const { jobs, deleteJob } = useContext(JobsContext);  // Access jobs and deleteJob from context

  return (
    <div className="job-list">
      <h2>Job List</h2>
      <ul>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <li key={job.id}>
              <strong>{job.jobType}</strong> - {job.priority} - {job.status}
              <button onClick={() => deleteJob(job.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </ul>
    </div>
  );
};

export default JobList;
