import React from 'react'
import CardComponent from '../CardComponent/CardComponent';
import Grid from '@material-ui/core/Grid';
import "./styles.css";
import { v4 as uuidv4 } from 'uuid';

export default function Cards({cards,accent,edit,setCard}) {
    const removeCard=(cardId)=>{
        //Filtering the cards not having id same as that of card to be deleted
        //This will remove that one card which has the same id
        console.log(cards);
        const updatedCards=cards.filter(card=>cardId!==card.caption);
        setCard(updatedCards);
        console.log(updatedCards);
      }
    return (
        <Grid container spacing={3} className="grid">
            {cards.map((card)=>{
            return <Grid item lg={3} mg={4} sm={6} xs={12} key={uuidv4()}>
                    <CardComponent accent={accent} image={card.image} key={uuidv4()} id={card.caption} removeCard={removeCard} caption={card.caption} edit={edit}/>
                </Grid>
            })}
        </Grid>
    )
}
