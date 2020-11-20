import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import useInput from "../../hooks/useInput";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        My Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    padding:"30px",
    margin: theme.spacing(1),
    backgroundColor: "#f8bbd0",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    backgroundColor:"pink",
    padding:"10px",
    margin: theme.spacing(3, 0, 2),
    fontSize:"17px"
  },
  caption:{
    fontSize:"18px",
  },
  image:{
    borderColor:"red",
    color:"blue",
  },
}));

export default function Form({cards,setCard}) {
  const classes = useStyles();
  //console.log(cards);
  const [caption,setCaption]=useInput("");
  const [image,setImage]=useInput("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    let card={};
    let newCards=[];
    card.caption=caption;
    card.image=image;
    newCards=[...cards,card];
    //cards.push(card)
    setCard(newCards);
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddToPhotosIcon style={{fontSize:"30px"}}/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Add your Widget
        </Typography>
        <form className={classes.form} noValidate>
          <TextField className={classes.caption}
            margin="normal"
            required
            fullWidth
            id="caption"
            label="Caption"
            name="caption"
            autoComplete="caption"
            onChange={setCaption}
          />
          <TextField className={classes.image}
            margin="normal"
            required
            fullWidth
            name="image"
            label="Image URL"
            type="text"
            id="image"
            autoComplete="Image-URL"
            onChange={setImage}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Add Widget
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
