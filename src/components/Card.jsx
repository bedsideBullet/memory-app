import React from 'react';

const Card = ({ image, category, id }) => {
  return (
    <div style={{
      backgroundColor: 'lightgrey',
      width: '100%',
      height: '18vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      flexDirection: 'column', // Stacks image and category vertically
    }}>
      <img
        src={image}
        alt={`Token ${id}`}
        style={{
          maxWidth: '100%',
          maxHeight: '70%',
          objectFit: 'cover',
        }}
      />
      <div style={{
        marginTop: '8px',
        fontSize: '14px',
        fontWeight: 'bold',
      }}>
        {category}
      </div>
    </div>
  );
};

export default Card;