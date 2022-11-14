import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'



export default function ActionAreaCard({ projects: { name, image, href } }) {
  return (

    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea href={href} target="_blank" >
        <CardMedia
          component="img"
          height="170" 
          image={image}
          alt={name}
        
        />
        <CardContent  >
          <Typography variant="body2" component="div" textAlign="center" margin={-1} >
            {name}
          </Typography>


        </CardContent>
      </CardActionArea>
    </Card>
  );
}
