import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function CardComponent({caption,image,key}) {
    return (
        <Card key={caption} >
            <CardActionArea>
            <CardMedia className="cardMedia"
                image={image || "https://softsmart.co.za/wp-content/uploads/2018/06/image-not-found-1038x576.jpg"}
                title={caption}
            />
            </CardActionArea>
            <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {caption}
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
        </Card>
    )
}
