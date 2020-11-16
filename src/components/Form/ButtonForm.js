import React from "react";
import {Button,IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import "./ButtonForm.css";

const ButtonForm=()=>{
    return (
        <div className="parentDiv">
            <h1>Button Form</h1>
            <div className="buttonWrapper">
                <IconButton aria-label="add" className="button">
                    <AddIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    );
}

export default ButtonForm;