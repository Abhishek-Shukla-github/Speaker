import React,{useState,useEffect} from 'react';
import ButtonForm from './components/ButtonForm/ButtonForm';
import TextBoxButton from './components/TextBoxButton/TextBoxButton';

import Cards from './components/Cards/Cards';


export default function App() {
    const [cards,setCard]=useState([]);
    useEffect(()=>{
        setCard(cards);
    },[cards,setCard])
    console.log(cards);
    return (
        <div>
            <div>
                <TextBoxButton />
            </div>
            <Cards cards={cards} />
            <div>
                <ButtonForm cards={cards} setCard={setCard}/>
            </div>
        </div>
    )
}
