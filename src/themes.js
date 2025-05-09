// src/themes.js
import { createTheme } from "@mui/material/styles";

// Import your background images
// Make sure these paths are correct and the images exist in your assets folder
import lightBackgroundImageFile from "./assets/lightBg1.png";
import darkBackgroundImageFile from "./assets/darkBg1.png";

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#ff5722", // Example: from your retro light theme
		},
		secondary: {
			main: "#ffc107", // Example: from your retro light theme
		},
		background: {
			default: "#f5f5f5", // A light background color
		},
	},
	// Custom property for background image
	backgroundImage: `url(${lightBackgroundImageFile})`,
	// You can add other custom properties or overrides here
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					// Example of styling specific to light theme
				},
			},
		},
	},
});

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#00bcd4", // Example: from your futuristic dark theme
		},
		secondary: {
			main: "#ffeb3b", // Example: from your futuristic dark theme
		},
		background: {
			default: "#303030", // A dark background color
		},
	},
	// Custom property for background image
	backgroundImage: `url(${darkBackgroundImageFile})`,
	// You can add other custom properties or overrides here
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					// Example of styling specific to dark theme
				},
			},
		},
	},
});
