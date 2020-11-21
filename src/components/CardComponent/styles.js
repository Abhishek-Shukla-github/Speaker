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
    delete:{
        backgroundColor:"#ffc1e3",
        padding:"5px",
        margin:"8px",
        borderRadius:"10px",
        fontSize:"50px",
        cursor:"pointer",
        "&:hover": {
            backgroundColor: "#bf5f82",
          }
    }
});

export default useStyles;