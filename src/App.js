import React,{useState,useEffect} from 'react';
import ButtonForm from './components/ButtonForm/ButtonForm';
import TextBoxButton from './components/TextBoxButton/TextBoxButton';
import {Checkbox,FormControlLabel} from "@material-ui/core";
import Cards from './components/Cards/Cards';
import "./app.styles.css";
import {animateScroll as scroll } from 'react-scroll';

export default function App() {
    let localData=()=>{
        let data=localStorage.getItem("cards");
        return data? JSON.parse(data) : [];
    }
    let voices = window.speechSynthesis.getVoices();
    const [cards,setCard]=useState(localData);
    const [accent,setAccent]=useState("");
    const [edit,setEdit]=useState(false);
    useEffect(()=>{
        localStorage.setItem("cards",JSON.stringify(cards));
        setCard(cards);
        scroll.scrollToBottom();
    },[cards,setCard])
    useEffect(()=>{
        setAccent(voices[0]);
    },[]);
    return (
        <div>
            <header>
                <h1>Speaker</h1>
                <p>The voice of the voiceless</p>
                <p>And those suffering from autism</p>
                <FormControlLabel value="editing" control={<Checkbox color="secondary" onClick={()=>setEdit(!edit)}/>} label="Enable Editing" labelPlacement="start" style={{backgroundColor:"rgba(255, 193, 227,0.35)",padding:"5px",marginTop:"15px",borderRadius:"8px"}}/>
            </header>
            <TextBoxButton accent={accent} setAccent={setAccent}/>
            <Cards cards={cards} accent={accent} edit={edit} setCard={setCard}/>
            <div>
                <ButtonForm cards={cards} setCard={setCard} accent={accent}/>
            </div>
        </div>
    )
}
