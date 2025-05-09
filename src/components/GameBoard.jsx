import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import Card from './Card'; // Import the Card component
import tokens from '../tokens'; // Import the tokens array

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

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '20px',
      textAlign: 'center',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // 4 cards per row
        gap: '16px',
        width: '90%',
        maxWidth: '1200px',
      }}>
        <Typography variant="body1" style={{
          gridColumn: 'span 4', // Span the entire row for text
          textAlign: 'center',
          marginBottom: '20px',
        }}>
          Time: 30s | Level: 1 | Score: 0
        </Typography>
        {tokens.map((token) => (
          <Card
            key={token.id}
            image={token.image}
            category={token.category}
            id={token.id}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;