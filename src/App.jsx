// import React, { useState } from "react";
// import {
// 	ThemeProvider,
// 	CssBaseline,
// 	Button,
// 	Typography,
// 	Box,
// } from "@mui/material";
// import Menu from "./components/Menu";
// import GameBoard from "./components/GameBoard";
// import AppDrawer from "./components/AppDrawer";
// import {
// 	retroLightTheme,
// 	retroDarkTheme,
// 	futuristicLightTheme,
// 	futuristicDarkTheme,
// } from "./themes";
// import nintendoImg from "./assets/nintendo.png";
// const App = () => {
// 	const [currentTheme, setCurrentTheme] = useState(retroLightTheme);
// 	const [selectedCategory, setSelectedCategory] = useState(null);
// 	const [drawerOpen, setDrawerOpen] = useState(false);
// 	const [highScores, setHighScores] = useState([]);

// 	const handleCategorySelect = (category) => setSelectedCategory(category);

// 	const handleThemeSelect = (themeName) => {
// 		switch (themeName) {
// 			case "Retro Light":
// 				setCurrentTheme(retroLightTheme);
// 				break;
// 			case "Retro Dark":
// 				setCurrentTheme(retroDarkTheme);
// 				break;
// 			case "Futuristic Light":
// 				setCurrentTheme(futuristicLightTheme);
// 				break;
// 			case "Futuristic Dark":
// 				setCurrentTheme(futuristicDarkTheme);
// 				break;
// 			default:
// 				setCurrentTheme(retroLightTheme);
// 		}
// 	};

// 	const handleEndGame = (updatedHighScores) => {
// 		setHighScores(updatedHighScores);
// 		setSelectedCategory(null);
// 	};

// 	return (
// 		<ThemeProvider theme={currentTheme}>
// 			<CssBaseline />
// 			<Box style={{ textAlign: "center", padding: "20px" }}>
// 				{/* App Title */}
// 				<img
// 					src={nintendoImg}
// 					alt="logo"
// 					style={{ width: "450px", height: "auto" }}
// 				/>
// 				<Typography variant="h4" style={{ marginBottom: "20px" }}>
// 					Memory Game{" "}
// 				</Typography>
// 				<Button
// 					style={{ position: "absolute", top: "10px", left: "10px" }}
// 					onClick={() => setDrawerOpen(true)}
// 				>
// 					☰
// 				</Button>
// 				{selectedCategory ? (
// 					<GameBoard
// 						category={selectedCategory}
// 						onEndGame={handleEndGame}
// 						highScores={highScores}
// 						setHighScores={setHighScores}
// 					/>
// 				) : (
// 					<Menu onCategorySelect={handleCategorySelect} />
// 				)}

// 				{/* Drawer */}
// 				<AppDrawer
// 					open={drawerOpen}
// 					onClose={() => setDrawerOpen(false)}
// 					onThemeSelect={handleThemeSelect}
// 					highScores={highScores}
// 				/>
// 			</Box>
// 		</ThemeProvider>
// 	);
// };

// export default App;

// src/App.js
import React, { useState } from "react";
import {
	ThemeProvider,
	CssBaseline,
	Button,
	Typography,
	Box,
} from "@mui/material";
import Menu from "./components/Menu";
import GameBoard from "./components/GameBoard";
import AppDrawer from "./components/AppDrawer";
import { lightTheme, darkTheme } from "./themes"; // Updated import
import nintendoImg from "./assets/nintendo.png";

const App = () => {
	const [currentTheme, setCurrentTheme] = useState(lightTheme); // Default to light theme
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [highScores, setHighScores] = useState([]);

	const handleCategorySelect = (category) => setSelectedCategory(category);

	const handleThemeSelect = (themeName) => {
		// themeName will be "Light" or "Dark"
		switch (themeName) {
			case "Light":
				setCurrentTheme(lightTheme);
				break;
			case "Dark":
				setCurrentTheme(darkTheme);
				break;
			default:
				setCurrentTheme(lightTheme);
		}
	};

	const handleEndGame = (updatedHighScores) => {
		setHighScores(updatedHighScores);
		setSelectedCategory(null);
	};

	return (
		<ThemeProvider theme={currentTheme}>
			<CssBaseline />{" "}
			{/* CssBaseline applies theme.palette.background.default */}
			<Box
				style={{
					textAlign: "center",
					padding: "20px",
					backgroundImage: currentTheme.backgroundImage, // Apply background image from theme
					backgroundSize: "cover", // Cover the entire area
					backgroundPosition: "center", // Center the image
					backgroundRepeat: "no-repeat", // Do not repeat the image
					backgroundAttachment: "fixed", // Keep background fixed during scroll
					minHeight: "100vh", // Ensure Box takes at least full viewport height
					transition: "background-image 0.3s ease-in-out", // Smooth transition for background change
					color: currentTheme.palette.text.primary, // Ensure text color contrasts with background
				}}
			>
				{/* App Title */}
				<img
					src={nintendoImg}
					alt="logo"
					style={{ width: "450px", height: "auto" }}
				/>
				<Typography variant="h4" style={{ marginBottom: "20px" }}>
					Memory Game
				</Typography>
				<Button
					style={{ position: "absolute", top: "10px", left: "10px" }}
					onClick={() => setDrawerOpen(true)}
				>
					☰
				</Button>
				{selectedCategory ? (
					<GameBoard
						category={selectedCategory}
						onEndGame={handleEndGame}
						highScores={highScores}
						setHighScores={setHighScores}
					/>
				) : (
					<Menu onCategorySelect={handleCategorySelect} />
				)}

				{/* Drawer */}
				<AppDrawer
					open={drawerOpen}
					onClose={() => setDrawerOpen(false)}
					onThemeSelect={handleThemeSelect} // This will pass "Light" or "Dark"
					highScores={highScores}
				/>
			</Box>
		</ThemeProvider>
	);
};

export default App;
