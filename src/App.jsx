import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Button, Typography, Box } from '@mui/material';
import Menu from './components/Menu';
import GameBoard from './components/GameBoard';
import AppDrawer from './components/AppDrawer';
import { retroLightTheme, retroDarkTheme, futuristicLightTheme, futuristicDarkTheme } from './themes';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(retroLightTheme);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCategorySelect = (category) => setSelectedCategory(category);

  const handleThemeSelect = (themeName) => {
    switch (themeName) {
      case 'Retro Light': setCurrentTheme(retroLightTheme); break;
      case 'Retro Dark': setCurrentTheme(retroDarkTheme); break;
      case 'Futuristic Light': setCurrentTheme(futuristicLightTheme); break;
      case 'Futuristic Dark': setCurrentTheme(futuristicDarkTheme); break;
      default: setCurrentTheme(retroLightTheme);
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box style={{ textAlign: 'center', padding: '20px' }}>
        {/* App Title */}
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          Video Game Memory Match
        </Typography>

        {/* Menu or GameBoard */}
        <Button
          style={{ position: 'absolute', top: '10px', left: '10px' }}
          onClick={() => setDrawerOpen(true)}
        >
          ☰
        </Button>
        {selectedCategory ? (
          <GameBoard category={selectedCategory} />
        ) : (
          <Menu onCategorySelect={handleCategorySelect} />
        )}

        {/* Drawer */}
        <AppDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onThemeSelect={handleThemeSelect}
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;