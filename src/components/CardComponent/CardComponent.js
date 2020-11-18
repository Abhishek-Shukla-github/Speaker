import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function CardComponent({caption,image,key}) {
  const { speak } = useSpeechSynthesis();
  const classes=useStyles();
    return (
        <Card key={caption} className={classes.card} >
            <CardActionArea onClick={()=>speak({text:caption})}>
            <CardMedia className={classes.cardMedia}
                image={image || "https://softsmart.co.za/wp-content/uploads/2018/06/image-not-found-1038x576.jpg"}
                title={caption}
            />
            </CardActionArea>
            <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.caption}>
            {caption}
          </Typography>
        </CardContent>
        <CardActions>
        <EditIcon className={classes.edit}/>
        <DeleteIcon className={classes.delete}/>
      </CardActions>
        </Card>
    )
}