import { Button, Box } from '@mui/material'

const style = {
  nav: {
    backgroundColor: '#EDC5AB',
    display: 'flex',
    justifyContent: 'right',
    padding: '10px'
  },
  buttonDe: {
    backgroundColor: '#469597'
  },
  buttonEn: {
    backgroundColor: '#469597',
    marginRight: '15px'
  }
}

const Navbar = () => {
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
