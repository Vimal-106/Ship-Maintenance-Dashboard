import { useState, useContext } from 'react';
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import ShipsContext from '../../contexts/ShipsContext';
import '../../styles/ShipForm.css';

const ShipForm = () => {
  const { addShip } = useContext(ShipsContext);
  const navigate = useNavigate(); 

  const [name, setName] = useState('');
  const [imo, setImo] = useState('');
  const [flag, setFlag] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newShip = {
      id: `s${Date.now()}`, 
      name,
      imo,
      flag,
      status,
    };

    addShip(newShip);

    setName('');
    setImo('');
    setFlag('');
    setStatus('');

    navigate('/ships');
  };

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          width: '400px',
        }}
      >
        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
          Create New Ship
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Ship Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="IMO Number"
                variant="outlined"
                value={imo}
                onChange={(e) => setImo(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Flag"
                variant="outlined"
                value={flag}
                onChange={(e) => setFlag(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Status</InputLabel>
                <Select
                  label="Status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Under Maintenance">Under Maintenance</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ padding: 1.5, fontSize: '16px', textTransform: 'none' }}
              >
                Add Ship
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default ShipForm;
