import { createTheme } from "@mui/material/styles";

// Import your background images
import lightBackgroundImageFile from "./assets/lightBg.png";
import darkBackgroundImageFile from "./assets/darkBg.png";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ec1c2d", // Corrected from ##ec1c2d to #ec1c2d
    },
    secondary: {
      main: "#ffc107",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  // Custom property for background image
  backgroundImage: `url(${lightBackgroundImageFile})`,
  components: {
    // Override MuiButton to ensure non-transparent backgrounds
    MuiButton: {
      styleOverrides: {
        root: {
          // Ensure contained buttons have a solid background
          "&.MuiButton-contained": {
            backgroundColor: "#ec1c2d", // Use primary.main explicitly
            color: "#ffffff", // White text for contrast
            "&:hover": {
              backgroundColor: "#d81b60", // Slightly darker shade for hover
            },
          },
          // Ensure outlined buttons are visible
          "&.MuiButton-outlined": {
            borderColor: "#ec1c2d",
            color: "#ec1c2d",
            "&:hover": {
              backgroundColor: "rgba(236, 28, 45, 0.1)", // Light background on hover
            },
          },
          // Ensure text buttons are visible
          "&.MuiButton-text": {
            color: "#ec1c2d",
            "&:hover": {
              backgroundColor: "rgba(236, 28, 45, 0.1)",
            },
          },
        },
      },
    },
    // Optional: Override MuiMenuItem if your menu uses MenuItem components
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent", // Ensure no unintended transparency
          color: "#000000", // Black text for readability
          "&:hover": {
            backgroundColor: "rgba(236, 28, 45, 0.1)", // Light hover effect
          },
          "&.Mui-selected": {
            backgroundColor: "rgba(236, 28, 45, 0.2)", // Selected state
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00bcd4",
    },
    secondary: {
      main: "#ffeb3b",
    },
    background: {
      default: "#303030",
    },
  },
  // Custom property for background image
  backgroundImage: `url(${darkBackgroundImageFile})`,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Add similar overrides if transparency occurs in dark theme
        },
      },
    },
  },
});