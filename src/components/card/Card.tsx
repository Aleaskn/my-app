import React from 'react'
import './Card.css'

interface ICard {
    title : string
    description : string
    img? : string
    name? : string
    avatar? : string
}

const Card : React.FC<ICard> = ({
    title, 
    description,
    img, 
    name, 
    avatar
}) => {
    return (
        <React.Fragment>
            <h1 className='title'>{title}</h1>
            <h2 className='description'>{description}</h2>
        </React.Fragment>
    )
}

export default Card;