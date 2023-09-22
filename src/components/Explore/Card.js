
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// export default function PlaceCard(props) {
//   const { imageUrl, title, description } = props;

//   return (
//     <Card sx={{ maxWidth: 220, Height:300}}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="200"
//           width="70"
//           image={imageUrl}
//           alt={title }
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary" fontSize={10}>
//             {description }
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
    
//   );
// }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Explore.css'; // Import your CSS file for custom styling

export default function PlaceCard(props) {
  const { imageUrl, title, description } = props;

  return (
    <Card className="place-card" sx={{ maxWidth: 300, maxheight: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="290"
          width="70"
          image={imageUrl}
          alt={title}
          className="image"
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2"  fontSize={12}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



