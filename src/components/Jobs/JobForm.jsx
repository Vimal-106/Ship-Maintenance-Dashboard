import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';  // ✅ Import useNavigate
import JobsContext from '../../contexts/JobsContext';
import './JobForm.css';

const JobForm = () => {
  const { addJob } = useContext(JobsContext);
  const navigate = useNavigate();  // ✅ Initialize the navigate hook

  const [jobType, setJobType] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [assignedEngineer, setAssignedEngineer] = useState('');
  const [scheduledDate, setScheduledDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: `j${Date.now()}`,
      jobType,
      priority,
      status,
      assignedEngineer,
      scheduledDate,
    };

    addJob(newJob);

    // Reset form fields
    setJobType('');
    setPriority('');
    setStatus('');
    setAssignedEngineer('');
    setScheduledDate('');

    // ✅ Redirect to the Job List page
    navigate('/jobs');
  };

  return (
    <div className="job-form">
      <h2>Create Maintenance Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Type"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Assigned Engineer"
          value={assignedEngineer}
          onChange={(e) => setAssignedEngineer(e.target.value)}
          required
        />
        <input
          type="date"
          value={scheduledDate}
          onChange={(e) => setScheduledDate(e.target.value)}
          required
        />
        <button type="submit">Create Job</button>
      </form>
    </div>
  );
};

export default JobForm;
