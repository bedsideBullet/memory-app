import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const Menu = ({ onCategorySelect }) => {
  const categories = [
    'Franchise One', 'Franchise Two', 'Franchise Three',
    'Franchise Four', 'Franchise Five', 'All Games'
  ];

  return (
    <div style={{
      padding: '20px', 
      textAlign: 'center', 
      maxWidth: '600px', 
      margin: '0 auto' // Center the menu
    }}>
      <Typography variant="h5" style={{ marginBottom: '10px' }}>
        Choose a Category
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item key={index}>
            <Button 
              variant="contained" 
              onClick={() => onCategorySelect(category)} 
              style={{ minWidth: '150px' }}
            >
              {category}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Menu;