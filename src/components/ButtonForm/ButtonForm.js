import React, { useState,useEffect } from "react";
import {IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import "./ButtonForm.css";
import Form from "../Form/Form";
import { animateScroll as scroll } from 'react-scroll';

const ButtonForm=({cards,setCard})=>{
    const [form,setForm]=useState(false);
    useEffect(()=>{
        setForm(!form);
    },[cards,setCard])
    return (
        <div className="parentDiv">
            <div>
                {form && <Form cards={cards} setCard={setCard}/>}
            </div>
            <div className="buttonWrapper">
                {!form && <IconButton aria-label="add" className="button" onClick={()=>{
                    setForm(!form)
                    scroll.scrollToBottom()
                }}>
                    <AddIcon style={{fontSize:"60px"}} />
                </IconButton>}
                {form && <IconButton aria-label="add" className="button" onClick={()=>{
                    scroll.scrollToTop();
                    setForm(!form)
                }}>
                    <CancelIcon style={{fontSize:"60px"}} />
                </IconButton>}
            </div>
        </div>
    );
}

export default ButtonForm;