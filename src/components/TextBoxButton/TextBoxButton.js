import React, { useState,useEffect } from "react";
import {IconButton,TextareaAutosize} from "@material-ui/core";
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CancelIcon from '@material-ui/icons/Cancel';
import "./styles.css";
import TextBox from "../TextBox/TextBox";


const TextBoxButton=({accent,setAccent})=>{
    const [textbox,toggleTextbox]=useState(false);
    return (
        <div className="parentDiv">
            <div className="buttonWrap">
                <IconButton aria-label="text" className="text-button" onClick={()=>toggleTextbox(!textbox)}>
                    {textbox ? <CancelIcon style={{fontSize:"60px"}} />: <TextFieldsIcon style={{fontSize:"60px"}} /> }
                </IconButton>
            </div>
                {textbox && <TextBox display={textbox} accent={accent} setAccent={setAccent}/> }
        </div>
    );
}

export default TextBoxButton;