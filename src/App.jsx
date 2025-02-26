
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import Topbar from './components/Topbar'
import Main from './pages/Main';
import Footer from './components/Footer';

export default function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Main /> 
            <Footer />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}