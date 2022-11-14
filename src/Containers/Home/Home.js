import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Grid, Typography } from '@mui/material';
import Image from '../Home/Imagenes/pataclo3.jpg'
import Image2 from '../Home/Imagenes/img1.jpg'
import Image3 from '../Home/Imagenes/fondo3.jpg'
import Card from '.././Card/Card'
import projects from '../Projects/Projects'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';






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
const styles3 = {
  paperContainer: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: `calc(100vw + 48px)`,
    margin: -24,
    padding: 24,
    backgroundImage: `url(${Image3})`
  }
};


const Home = () => {
  return (

    <div>
      <Grid>
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
                PROJECTS
              </Button>


            </Grid>
          </Container>
        </React.Fragment>

        <React.Fragment >
          <CssBaseline />
          <Container id='projects' maxWidth="lm" style={styles2.paperContainer} >
            <Grid

              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '98vh' }} sx={{ bgcolor: 'primary' }}>
              <Typography align='center' color="#ffff" fontSize="1.5em"    >
                <h1>Projects</h1>
              </Typography>

              <Grid container spacing={3}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                {
                  projects.map(projects => (
                    <Grid item xs={5} sm={2.7} lg={2}>
                      <Card key={projects.id} projects={projects} />
                    </Grid>
                  ))
                }

              </Grid>
            </Grid>
          </Container>
        </React.Fragment>

        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lm" style={styles3.paperContainer}  >
            <Grid container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '90vh' }} sx={{ bgcolor: 'primary' }}>
              <Typography align='center' color="#ffff" fontSize="1.5em"  >
                <h2>Contacts</h2>
              </Typography>
              <Container style={{ textAlign: "center" }} sx={{ bgcolor: 'primary' }}>
                <Button sx={{ color: "#0e76a8" }} href='https://www.linkedin.com/in/ibraalzuru/' target="_blank">
                  <LinkedInIcon sx={{ fontSize: 60, margin: '20px' }} />
                </Button>
                <Button sx={{ color: "black" }} href='https://github.com/ibralzuru' target="_blank" >
                  <GitHubIcon sx={{ fontSize: 60, margin: '20px' }} />
                </Button>
                <Button sx={{ color: "#d6249f" }} href='https://www.instagram.com/ibracortes/' target="_blank">
                  <InstagramIcon sx={{ fontSize: 60, margin: '20px' }} />
                </Button>
              </Container>
            </Grid>
          </Container>
        </React.Fragment>
      </Grid>

    </div>

  )
}
export default Home;