import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2';

const GameBoard = ({ category }) => {
  useEffect(() => {
    Swal.fire({
      title: 'Get Ready!',
      html: 'Starting in <b>3</b> seconds...',
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => Swal.showLoading(),
    });
  }, []);

  const cards = Array.from({ length: 16 }, (_, i) => (
    <Grid item xs={3} key={i}>
      <div style={{
        backgroundColor: 'grey',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px'
      }}>
        Card {i + 1}
      </div>
    </Grid>
  ));

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4">Video Game Memory Match</Typography>
      <Typography variant="body1">Time: 30s | Level: 1 | Score: 0</Typography>
      <Grid container spacing={2} style={{ marginTop: '10px' }}>
        {cards}
      </Grid>
    </div>
  );
};

export default GameBoard;