import React,{useState} from 'react';
import useInput from "../../hooks/useInput";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "./styles.css";
import {useSpeechSynthesis} from "react-speech-kit";

export default function TextBox({display,accent,setAccent}) {
    const [text,setText]=useInput("");
    const {speak}=useSpeechSynthesis();
    let voices = window.speechSynthesis.getVoices();
    return (
        <div>
            {display &&
            <div className="text-box show fade">    
            <h1 className="title">Textbox</h1>
            <select name="voice" id="voice-select" className="select" onChange={(e)=>{
                let foundVoices = voices.filter(function(voice) { 
                return voice.name === e.target.value; 
            });
                setAccent(foundVoices[0]);
            }}>
                <option className="option">Choose accent</option>
                {voices.map((voice)=>{
                    return <option className="option">{voice.name}</option>
                })}
            </select>
            <TextareaAutosize className="text-area" onChange={(e)=>setText(e)}
                aria-label="Textbox"
                placeholder="Enter the text to be read/spoken"
            />
            <button className="speak-button" onClick={()=>speak({text:text,voice:accent})}>Speak</button>
            </div>
            }
        </div>
    )
}
