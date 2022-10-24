import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'



export default function ActionAreaCard({ projects: { name, image, href } }) {
  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={href} >
        <CardMedia
          component="img"
          height="150" 
          src={image}
          alt={name}
          

        />
        <CardContent  >
          <Typography gutterBottom variant="h7" component="div" textAlign="center" >
            {name}
          </Typography>


        </CardContent>
      </CardActionArea>
    </Card>
  );
}
