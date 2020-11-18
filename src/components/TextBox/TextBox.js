import React,{useState} from 'react';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./styles.css"

export default function TextBox({display}) {
    return (
        <div>
            <div className="text-box show fade">    
            <h1>Textbox</h1>
                {display && <TextareaAutosize
                    aria-label="maximum height"
                    placeholder="Enter the text to be read/spoken"
            />}
            </div>
            <div className="text-box">    
            <h1>Textbox</h1>
                {display && <TextareaAutosize
                    aria-label="maximum height"
                    placeholder="Enter the text to be read/spoken"
            />}
            </div>
        </div>
    )
}
