import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles({
    card:{
        backgroundColor:"#f48fb1",
        textAlign:"center",
        boxShadow: "rgba(50, 50, 93, 0.5) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
        "&:hover": {
            transform: "scale(1.05)",
            transition: "all 1s ease-in-out",
        }
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