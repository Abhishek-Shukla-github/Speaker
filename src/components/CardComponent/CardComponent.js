import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function CardComponent({caption,image,accent,edit,id,removeCard}) {
  const { speak} = useSpeechSynthesis();
  const classes=useStyles();
    return (
        <Card className={classes.card} >
            <CardActionArea onClick={()=>caption ? speak({text:caption,voice:accent}) : speak({text:"There is nothing for me to speak , please add a caption",voice:accent})}>
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
        {edit && 
        <div>
          <DeleteIcon className={classes.delete} onClick={()=>removeCard(caption)}/>
        </div> }
      </CardActions>
        </Card>
    )
}
