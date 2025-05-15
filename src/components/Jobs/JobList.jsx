// src/components/Jobs/JobList.jsx
import React, { useContext } from 'react';
import JobsContext from '../../contexts/JobsContext';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
} from '@mui/material';
import './JobList.css'; // optional custom styling

const JobList = () => {
  const { jobs, deleteJob } = useContext(JobsContext);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Job List
      </Typography>

      {jobs.length > 0 ? (
        <Grid container spacing={3}>
          {jobs.map((job) => (
            <Grid item xs={12} key={job.id}>
              <Card variant="outlined" sx={{ boxShadow: 3 }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="h6" color="primary">
                      {job.jobType}
                    </Typography>
                    <Typography variant="body2">
                      Priority: <strong>{job.priority}</strong> &nbsp;&nbsp;
                      Status: <strong>{job.status}</strong>
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => deleteJob(job.id)}
                    sx={{
                      padding: '4px 10px',
                      fontSize: '0.75rem',
                      textTransform: 'none',
                      minWidth: '60px',
                      mt: '-14px'
                    }}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1">No jobs available</Typography>
      )}
    </Box>
  );
};

export default JobList;
