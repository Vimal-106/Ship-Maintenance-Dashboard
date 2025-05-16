import { useContext } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import ShipsContext from '../../contexts/ShipsContext';
import JobsContext from '../../contexts/JobsContext';

const KPICards = () => {
  const { ships } = useContext(ShipsContext);
  const { jobs } = useContext(JobsContext);

  const totalShips = ships.length;
  const overdueJobs = jobs.filter((job) => new Date(job.scheduledDate) < new Date() && job.status !== 'Completed').length;
  const jobsInProgress = jobs.filter((job) => job.status === 'In Progress').length;
  const completedJobs = jobs.filter((job) => job.status === 'Completed').length;

  const kpis = [
    { label: 'Total Ships', value: totalShips, color: '#2196f3' },
    { label: 'Overdue Jobs', value: overdueJobs, color: '#f44336' },
    { label: 'Jobs in Progress', value: jobsInProgress, color: '#ff9800' },
    { label: 'Completed Jobs', value: completedJobs, color: '#4caf50' },
  ];

  return (
    <Grid container spacing={3} sx={{ marginTop: 2 }}>
      {kpis.map((kpi) => (
        <Grid item xs={12} sm={6} md={3} key={kpi.label}>
          <Card sx={{ backgroundColor: kpi.color, color: '#fff' }}>
            <CardContent>
              <Typography variant="h6">{kpi.label}</Typography>
              <Typography variant="h4">{kpi.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default KPICards;
