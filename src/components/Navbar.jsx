import { Button, Box } from '@mui/material'
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
  }
}

const Navbar = ({ lang, activeLang, setLang, setActiveLang }) => {
  return (
    <div style={style.nav}>
      <Box
        sx={{
          width: '150px'
        }}
      >
        <Button variant="contained" sx={style.buttonEn}>
          EN
        </Button>
        <Button variant="contained" sx={style.buttonDe}>
          DE
        </Button>
      </Box>
    </div>
  )
}

export default Navbar
