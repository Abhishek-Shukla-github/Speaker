import React,{useState,useEffect} from 'react';
import ButtonForm from './components/ButtonForm/ButtonForm';
import Cards from './components/Cards/Cards';

export default function App() {
    const [cards,setCard]=useState([]);
    useEffect(()=>{
        setCard(cards);
    },[cards,setCard])
    console.log(cards);
    return (
        <div>
            <Cards cards={cards} />
            <ButtonForm cards={cards} setCard={setCard}/>
        </div>
    )
}
