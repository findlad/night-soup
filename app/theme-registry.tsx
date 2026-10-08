'use client';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#f05a24', contrastText: '#080a09' },
    secondary: { main: '#489484' },
    background: { default: '#070908', paper: '#0f1714' },
    text: { primary: '#fce5ba', secondary: '#aac4bb' },
  },
  typography: {
    fontFamily: 'var(--font-sans)',
    h1: { fontFamily: 'var(--font-display)', fontWeight: 800 },
    h2: { fontFamily: 'var(--font-display)', fontWeight: 800 },
    h3: { fontFamily: 'var(--font-display)', fontWeight: 700 },
    h4: { fontFamily: 'var(--font-display)', fontWeight: 600 },
    button: { fontWeight: 800, letterSpacing: '0.08em' },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { minHeight: 48, paddingInline: 24 },
      },
    },
  },
});

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
