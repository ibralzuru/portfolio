import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Grid, Typography } from '@mui/material';
import Image from '../Home/Imagenes/pataclo3.jpg'
import Image2 from '../Home/Imagenes/pataclo2.jpg'


const styles = {
  paperContainer: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: `calc(100vw + 48px)`,
    margin: -24,
    padding: 24,
    backgroundImage: `url(${Image})`
  }
};
const styles2 = {
  paperContainer: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: `calc(100vw + 48px)`,
    margin: -24,
    padding: 24,
    backgroundImage: `url(${Image2})`
  }
};

const Home = () => {
  return (

    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lm" style={styles.paperContainer}  >
          <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '95vh' }} sx={{ bgcolor: 'primary' }}>
            <Typography align='center' color="#ffff" fontSize="1.5em"  >
              <h2> HEY! I'M IBRAHIM ALZURU  </h2>
              <h2>FullStack Developer</h2>
            </Typography>
            <Button style={{ background: '#2E3B55' }} variant="contained" size="large" href="#projects">
              Projects
            </Button>


          </Grid>
        </Container>
      </React.Fragment>

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lm" style={styles2.paperContainer}  >
          <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '95vh' }} sx={{ bgcolor: 'primary' }}>
            <Typography align='center' color="#ffff" fontSize="1.5em" id='projects' >
              <h2>Projects </h2>

            </Typography>


          </Grid>
        </Container>
      </React.Fragment>

    </div>

  )
}
export default Home;