import React,{useState,useEffect} from 'react';
import ButtonForm from './components/ButtonForm/ButtonForm';
import TextBoxButton from './components/TextBoxButton/TextBoxButton';
import Cards from './components/Cards/Cards';
import "./app.styles.css";


export default function App() {
    let localData=()=>{
        let data=localStorage.getItem("cards");
        return data? JSON.parse(data) : [];
    }
    let voices = window.speechSynthesis.getVoices();
    const [cards,setCard]=useState(localData);
    const [accent,setAccent]=useState("");
    useEffect(()=>{
        localStorage.setItem("cards",JSON.stringify(cards));
        setCard(cards);
    },[cards,setCard])
    useEffect(()=>{
        setAccent(voices[0]);
        console.log("Accent intialized to :-");
    },[]);
    console.log(accent);
    return (
        <div>
            <header>
                <h1>Speaker</h1>
                <p>The voice of the voiceless</p>
            </header>
            <TextBoxButton accent={accent} setAccent={setAccent}/>
            <Cards cards={cards} accent={accent}/>
            <div>
                <ButtonForm cards={cards} setCard={setCard} accent={accent}/>
            </div>
        </div>
    )
}
