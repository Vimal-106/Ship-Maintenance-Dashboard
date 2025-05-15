// src/components/Ships/ShipList.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Card, CardContent, Box, Grid } from '@mui/material';
import ShipsContext from '../../contexts/ShipsContext';
import './ShipList.css';  // Custom CSS (optional)

const ShipList = () => {
  const { ships, deleteShip } = useContext(ShipsContext);

  return (
    <Box sx={{ padding: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>Ships</Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create-ship"
          sx={{ mr: 30 , mt: 2}}
        >
          Add New Ship
        </Button>
      </Box>

      <Grid container spacing={3}>
        {ships.map((ship) => (
          <Grid item xs={12} sm={6} md={4} key={ship.id}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="primary">
                  <Link to={`/ship/${ship.id}`} className="ship-link">
                    {ship.name}
                  </Link>
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  IMO Number: {ship.imo}
                </Typography>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => deleteShip(ship.id)}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShipList;
