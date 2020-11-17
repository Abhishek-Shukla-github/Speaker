import React from 'react'
import CardComponent from '../CardComponent/CardComponent';
import Grid from '@material-ui/core/Grid';


export default function Cards({cards}) {
    console.log("Cards")
    console.log(cards);
    return (
        <Grid container spacing={3}>
            {cards.map((card)=>{
            return <Grid item lg={3} mg={4} sm={6} cs={12}>
                    <CardComponent image={card.image} caption={card.caption}/>
                </Grid>
            })}
        </Grid>
    )
}
