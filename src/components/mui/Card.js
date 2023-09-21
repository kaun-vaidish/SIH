
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PlaceCard(props) {
  const { imageUrl, title, description } = props;

  return (
    <Card sx={{ maxWidth: 250, Height:350}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          width="70"
          image={imageUrl}
          alt={title }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}


