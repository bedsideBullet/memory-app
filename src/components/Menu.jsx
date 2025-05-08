import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const Menu = ({ onCategorySelect }) => {
  const categories = [
    'Franchise One', 'Franchise Two', 'Franchise Three',
    'Franchise Four', 'Franchise Five', 'All Games'
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4">Video Game Memory Match</Typography>
      <Typography variant="body1" style={{ margin: '10px 0' }}>
        Instructions: Match pairs of cards before time runs out!
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item key={index}>
            <Button variant="contained" onClick={() => onCategorySelect(category)}>
              {category}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Menu;