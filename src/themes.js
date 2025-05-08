import { createTheme } from '@mui/material/styles';

export const retroLightTheme = createTheme({
  palette: { mode: 'light', primary: { main: '#ff5722' }, secondary: { main: '#ffc107' } }
});

export const retroDarkTheme = createTheme({
  palette: { mode: 'dark', primary: { main: '#ff5722' }, secondary: { main: '#ffc107' } }
});

export const futuristicLightTheme = createTheme({
  palette: { mode: 'light', primary: { main: '#00bcd4' }, secondary: { main: '#ffeb3b' } }
});

export const futuristicDarkTheme = createTheme({
  palette: { mode: 'dark', primary: { main: '#00bcd4' }, secondary: { main: '#ffeb3b' } }
});