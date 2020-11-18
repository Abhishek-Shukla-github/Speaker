import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles({
    card:{
        backgroundColor:"#f48fb1",
        textAlign:"center"
    },
    cardMedia:{
        minHeight:"25vh",
        width:"100%",
    },
    caption:{
        fontFamily: 'Barlow' || "sansSerif", 
        fontSize:"30px",
    },
    edit:{
        backgroundColor:"#ffc1e3",
        padding:"5px",
        margin:"8px",
        borderRadius:"10px",
        fontSize:"50px",
        cursor:"pointer",
        "&:hover": {
            backgroundColor: "#bf5f82",
          }
    },
    delete:{
        backgroundColor:"#ffc1e3",
        padding:"5px",
        margin:"8px",
        borderRadius:"10px",
        fontSize:"50px",
        cursor:"pointer",
    }
});

export default useStyles;