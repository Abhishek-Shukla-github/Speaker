import React, { useState,useEffect } from "react";
import {Button,IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import "./ButtonForm.css";
import Form from "../Form/Form";

const ButtonForm=()=>{
    const [form,setForm]=useState(false);
    return (
        <div className="parentDiv">
            <h1>Button Form</h1>
            <div>
                {form && <Form/>}
            </div>
            <div className="buttonWrapper">
                {!form && <IconButton aria-label="add" className="button" onClick={()=>setForm(!form)}>
                    <AddIcon fontSize="large" />
                </IconButton>}
                {form && <IconButton aria-label="add" className="button" onClick={()=>setForm(!form)}>
                    <CloseIcon fontSize="large" />
                </IconButton>}
                
            </div>
        </div>
    );
}

export default ButtonForm;