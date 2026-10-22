import { BrowserRouter } from 'react-router'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Layout } from './components/Layout'
import { AutoProvider } from './context/AutpProvider'
import { FavoritosProvider } from './context/FavoritosProvider'

const theme = createTheme({
  typography: {
    fontFamily: "'Nunito', sans-serif",
  },
});

function App() {
   return (
    <ThemeProvider theme={theme}>
      <AutoProvider>
        <FavoritosProvider>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </FavoritosProvider>
      </AutoProvider>
    </ThemeProvider>
  )
}

export default App
