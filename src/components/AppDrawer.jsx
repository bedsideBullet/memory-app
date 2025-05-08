import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';

const AppDrawer = ({ open, onClose, onThemeSelect }) => {
  const themes = ['Retro Light', 'Retro Dark', 'Futuristic Light', 'Futuristic Dark'];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div style={{ width: '250px', padding: '10px' }}>
        <Typography variant="h6">High Scores</Typography>
        <List>
          <ListItem><ListItemText primary="1. AAA - Level 5 - 500pts" /></ListItem>
          <ListItem><ListItemText primary="2. BBB - Level 4 - 400pts" /></ListItem>
        </List>
        <Typography variant="h6">Choose Your Theme</Typography>
        <List>
          {themes.map((theme, index) => (
            <ListItem button key={index} onClick={() => onThemeSelect(theme)}>
              <ListItemText primary={theme} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default AppDrawer;