import React, { useState,useEffect } from "react";
import {IconButton,TextareaAutosize} from "@material-ui/core";
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CancelIcon from '@material-ui/icons/Cancel';
import "./styles.css";
import TextBox from "../TextBox/TextBox";


const TextBoxButton=()=>{
    const [textbox,toggleTextbox]=useState(false);
    return (
        <div className="parentDiv">
            <div>
                <h1>Text Box</h1>
            </div>
            <div className="buttonWrap">
                <IconButton aria-label="text" className="button" onClick={()=>toggleTextbox(!textbox)}>
                    {textbox ? <CancelIcon style={{fontSize:"60px"}} />: <TextFieldsIcon style={{fontSize:"60px"}} /> }
                </IconButton>
            </div>
                {textbox && <TextBox display={textbox} /> }
        </div>
    );
}

export default TextBoxButton;