
// import React, { useEffect, useState } from 'react';
// import { Typography } from '@mui/material';
// import Swal from 'sweetalert2';
// import Card from './Card'; // Import the Card component
// import tokens from '../tokens'; // Import the tokens array

// const GameBoard = ({ category }) => {
//   const [gameTokens, setGameTokens] = useState([]);

//   useEffect(() => {
//     // Show the "Get Ready" message
//     Swal.fire({
//       title: 'Get Ready!',
//       html: 'Starting in <b>3</b> seconds...',
//       timer: 3000,
//       timerProgressBar: true,
//       didOpen: () => Swal.showLoading(),
//     });

//     // Filter tokens based on the category
//     let filteredTokens = [];
//     if (category === 'All Games') {
//       filteredTokens = tokens;
//     } else {
//       const categoryNumber = categoriesMap[category];
//       filteredTokens = tokens.filter(token => token.category === categoryNumber.toString());
//     }

//     // Select 8 random tokens
//     const selectedTokens = [];
//     while (selectedTokens.length < 8 && filteredTokens.length > 0) {
//       const randomIndex = Math.floor(Math.random() * filteredTokens.length);
//       selectedTokens.push(filteredTokens.splice(randomIndex, 1)[0]);
//     }

//     // Duplicate and shuffle the tokens
//     const duplicatedTokens = [...selectedTokens, ...selectedTokens];
//     const shuffledTokens = duplicatedTokens.sort(() => Math.random() - 0.5);

//     // Set the shuffled tokens to state
//     setGameTokens(shuffledTokens);
//   }, [category]);

//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       padding: '20px',
//       textAlign: 'center',
//     }}>
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(4, 1fr)', // 4 cards per row
//         gap: '16px',
//         width: '90%',
//         maxWidth: '1200px',
//       }}>
//         <Typography variant="body1" style={{
//           gridColumn: 'span 4', // Span the entire row for text
//           textAlign: 'center',
//           marginBottom: '20px',
//         }}>
//           Time: 30s | Level: 1 | Score: 0
//         </Typography>
//         {gameTokens.map((token, index) => (
//           <Card
//             key={index}
//             image={token.image}
//             category={token.category}
//             id={token.id}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const categoriesMap = {
//   'Franchise One': 1,
//   'Franchise Two': 2,
//   'Franchise Three': 3,
//   'Franchise Four': 4,
//   'Franchise Five': 5,
// };

// export default GameBoard;

import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Swal from 'sweetalert2';
import Card from './Card'; // Import the Card component
import tokens from '../tokens'; // Import the tokens array

const GameBoard = ({ category }) => {
  const [gameTokens, setGameTokens] = useState([]);

  useEffect(() => {
    // Show the "Get Ready" message
    Swal.fire({
      title: 'Get Ready!',
      html: 'Starting in <b>3</b> seconds...',
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => Swal.showLoading(),
    });

    // Filter tokens based on the category
    let filteredTokens = [];
    if (category === 'All Games') {
      filteredTokens = tokens;
    } else {
      const categoryNumber = categoriesMap[category];
      filteredTokens = tokens.filter(token => token.category === categoryNumber.toString());
    }

    // Select 8 random tokens
    const selectedTokens = [];
    while (selectedTokens.length < 8 && filteredTokens.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredTokens.length);
      selectedTokens.push(filteredTokens.splice(randomIndex, 1)[0]);
    }

    // Duplicate and shuffle the tokens
    const duplicatedTokens = [...selectedTokens, ...selectedTokens];
    const shuffledTokens = duplicatedTokens.sort(() => Math.random() - 0.5);

    // Set the shuffled tokens to state
    setGameTokens(shuffledTokens);
  }, [category]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)', // 4 cards per row
          gap: '16px',
          width: '90%',
          maxWidth: '1200px',
        }}
      >
        <Typography
          variant="body1"
          style={{
            gridColumn: 'span 4', // Span the entire row for text
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Time: 30s | Level: 1 | Score: 0
        </Typography>
        {gameTokens.map((token, index) => (
          <Card
            key={index}
            image={token.image}
            category={token.category}
            id={token.id}
          />
        ))}
      </div>
    </div>
  );
};

const categoriesMap = {
  'Franchise One': 1,
  'Franchise Two': 2,
  'Franchise Three': 3,
  'Franchise Four': 4,
  'Franchise Five': 5,
};

export default GameBoard;