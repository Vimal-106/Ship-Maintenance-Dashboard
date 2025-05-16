
import { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  
import JobsContext from '../../contexts/JobsContext';
import '../../styles/JobCalendar.css';  

const JobCalendar = () => {
  const [date, setDate] = useState(new Date());
  const { jobs } = useContext(JobsContext);

  const filterJobsByDate = (selectedDate) => {
    const formattedDate = selectedDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    return jobs.filter((job) => job.scheduledDate === formattedDate);
  };

  return (
    <div className="job-calendar">
      <h2>Maintenance Calendar</h2>
      <Calendar onChange={setDate} value={date} />
      <h3>Scheduled Jobs on {date.toDateString()}:</h3>
      <ul>
        {filterJobsByDate(date).map((job) => (
          <li key={job.id}>
            {job.jobType} | {job.priority} | {job.assignedEngineer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobCalendar;
