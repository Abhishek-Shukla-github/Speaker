import React from 'react'

export default function Cards({cards}) {
    console.log("Cards")
    console.log(cards);
    return (
        <div>
            {cards.map((card)=>{
                return <div>
                    <h1>{card.caption}</h1>
                </div>
            })}
        </div>
    )
}
