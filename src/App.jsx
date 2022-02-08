import React from 'react';
import { Box, Button, Icon, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Delete, Language } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';
import { brown } from "@mui/material/colors";
import theme from './GeneralTheme';
import Navbar from './components/Navbar';

const useStyles = makeStyles({
  btnPersonal: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: brown[500],
    height: 48,
    padding: '0 30px'
  }
});

function App() {
  const classes = useStyles();
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Navbar/>

          <Box mt={9}>

            <Button variant="contained" color="primary" startIcon={<Delete/>} sx={{m:1}}>Hola</Button>

            <Button 
              variant="contained"
              color="secondary"
              sx={{m:1}}
              startIcon={<Language/>}>
              Mundo
            </Button>

            <Icon>home</Icon>

            <Button className={classes.btnPersonal}>
              My Button
            </Button>

            <Typography variant='h2'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus fuga neque dolor doloribus esse, magni similique suscipit. Temporibus, ipsum accusamus fugiat sed perspiciatis voluptatum commodi repellat aliquam laborum perferendis recusandae.
            </Typography>

            <Typography variant='h2'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus fuga neque dolor doloribus esse, magni similique suscipit. Temporibus, ipsum accusamus fugiat sed perspiciatis voluptatum commodi repellat aliquam laborum perferendis recusandae.
            </Typography>
          </Box>

      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
