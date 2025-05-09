// import React from 'react';

// const Card = ({ image, category, id }) => {
//   return (
//     <div style={{
//       backgroundColor: 'lightgrey',
//       width: '100%',
//       height: '18vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       borderRadius: '8px',
//       boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//       overflow: 'hidden',
//       flexDirection: 'column', // Stacks image and category vertically
//     }}>
//       <img
//         src={image}
//         alt={`Token ${id}`}
//         style={{
//           maxWidth: '100%',
//           maxHeight: '70%',
//           objectFit: 'cover',
//         }}
//       />
//       <div style={{
//         marginTop: '8px',
//         fontSize: '14px',
//         fontWeight: 'bold',
//       }}>
//         {category}
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useState } from 'react';

const Card = ({ image, category, id }) => {
  const [flipped, setFlipped] = useState(false); // Ensure the card starts unflipped (showing the back)

  const handleCardClick = () => {
    setFlipped(true); // Flip the card to reveal the front when clicked
  };

  return (
    <div
      onClick={handleCardClick} // Flip the card on click
      style={{
        perspective: '1000px', // Add perspective for 3D effect
        cursor: 'pointer', // Add a pointer cursor to indicate clickable
      }}
    >
      <div
        style={{
          width: '100%',
          height: '18vh',
          position: 'relative',
          transformStyle: 'preserve-3d', // Preserve 3D transformation
          transition: 'transform 0.3s ease-in-out', // Smooth flipping animation
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)', // Start showing the back, flip to front on click
        }}
      >
        {/* Front of the card */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden', // Hide the back when showing the front
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column', // Stacks image and category vertically
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transform: 'rotateY(180deg)', // Ensure the front is rotated when the card starts
          }}
        >
          <img
            src={image}
            alt={`Token ${id}`}
            style={{
              maxWidth: '100%',
              maxHeight: '70%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              marginTop: '8px',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {category}
          </div>
        </div>

        {/* Back of the card */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden', // Hide the front when showing the back
            backgroundColor: 'darkgrey',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}
        >
          Card Back
        </div>
      </div>
    </div>
  );
};

export default Card;