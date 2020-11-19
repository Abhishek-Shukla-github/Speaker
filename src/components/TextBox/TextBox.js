import React,{useState} from 'react';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./styles.css"

export default function TextBox({display}) {
    return (
        <div>
            {display &&
            <div className="text-box show fade">    
            <h1 className="title">Textbox</h1>
            <TextareaAutosize className="text-area"
                aria-label="Textbox"
                placeholder="Enter the text to be read/spoken"
            />
            <button className="speak-button">Speak</button>
            </div>
            }
        </div>
    )
}
