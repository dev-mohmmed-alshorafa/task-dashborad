import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from './helpers/theme'
import { useSelector } from 'react-redux'

import { Box } from '@mui/material'
import Home from './pages/Home'
import { useEffect } from 'react'
import Login from './pages/Login'

function App() {
  const mode = useSelector((state) => state.mode)
  const user = useSelector((state) => state.user)
  const lang = useSelector((state) => state.lang)
  useEffect(() => {
    const body = document.querySelector('body')
    if (mode) {
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }
  }, [mode])

  return (
    <Box dir={lang} className={'App'}>
      <ThemeProvider theme={theme}>
      {user? <Home />:<Login/>} 
      </ThemeProvider>
    </Box>
  )
}

export default App
