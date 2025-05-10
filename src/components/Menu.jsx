import React from "react";
import { Button, Grid, Typography } from "@mui/material";

const Menu = ({ onCategorySelect }) => {
  const categories = [
    { name: "Franchise One", image: "src/assets/marioLogo.png" },
    { name: "Franchise Two", image: "src/assets/Bowser.png" },
    { name: "Franchise Three", image: "src/assets/fireFlower.png" },
    { name: "Franchise Four", image: "src/assets/goomba.png" },
    { name: "Franchise Five", image: "src/assets/kingBobom.png" },
    { name: "All Games", image: "src/assets/luigi.png" },
  ];

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto", // Center the menu
      }}
    >
      <Typography variant="h5" style={{ marginBottom: "10px" }}>
        Choose a Category
      </Typography>
      <Grid
  container
  spacing={2}
  justifyContent="center"
  sx={{ maxWidth: "800px", margin: "0 auto" }} // Wider to fit 3x 240px buttons + spacing
>

        {categories.map((category, index) => (
          <Grid item xs={4} key={index}>
            <Button
              variant="contained"
              onClick={() => onCategorySelect(category)}
              style={{
                width: "200px", // Fixed width for square shape
                height: "200px", // Fixed height for square shape
                minWidth: "120px", // Ensure no shrinkage
                minHeight: "120px", // Ensure no shrinkage
                padding: "10px", // Consistent padding
                display: "flex", // Center text vertically
                alignItems: "center", // Center text vertically
                justifyContent: "center", // Center text horizontally
                textTransform: "none", // Prevent uppercase text for better fit
                backgroundColor: "#ffffff", // white background
                border: "15px solid red", // thick red border
                borderRadius: "15px",
                fontSize: "14px", // Adjust font size for longer text
                lineHeight: "1.2", // Improve text wrapping
                whiteSpace: "normal", // Allow text to wrap
              }}
              aria-label={`Select ${category} category`}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Menu;

