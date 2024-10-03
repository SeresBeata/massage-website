import { Button, Box, Typography } from '@mui/material'
import SpaIcon from '@mui/icons-material/Spa'
import en from '../assets/eng.json'
import de from '../assets/de.json'

const style = {
  nav: {
    backgroundColor: '#EDC5AB',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px'
  },
  buttonContainer: {
    width: '150px',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  button: {
    backgroundColor: '#EDC5AB',
    border: '#469597 2px solid',
    color: '#469597'
  },
  activeLangStyle: {
    backgroundColor: '#469597'
  },
  logo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  }
}

const Navbar = ({ lang, activeLang, setLang, setActiveLang }) => {
  return (
    <div style={style.nav}>
      <Box style={style.logo}>
        <SpaIcon />
        <Typography>Relaxify</Typography>
      </Box>
      <Box sx={style.buttonContainer}>
        <Button
          variant="contained"
          sx={activeLang === 'en' ? style.activeLangStyle : style.button}
          onClick={() => {
            setLang(en)
            setActiveLang('en')
            localStorage.setItem('language', 'en')
          }}
        >
          EN
        </Button>
        <Button
          variant="contained"
          sx={activeLang === 'de' ? style.activeLangStyle : style.button}
          onClick={() => {
            setLang(de)
            setActiveLang('de')
            localStorage.setItem('language', 'de')
          }}
        >
          DE
        </Button>
      </Box>
    </div>
  )
}

export default Navbar
