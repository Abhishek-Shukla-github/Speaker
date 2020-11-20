import React from 'react'
import CardComponent from '../CardComponent/CardComponent';
import Grid from '@material-ui/core/Grid';
import "./styles.css";


export default function Cards({cards,accent}) {
    return (
        <Grid container spacing={3} className="grid">
            {cards.map((card)=>{
            return <Grid item lg={3} mg={4} sm={6} xs={12} key={card.caption}>
                    <CardComponent accent={accent} image={card.image} caption={card.caption}/>
                </Grid>
            })}
        </Grid>
    )
}
