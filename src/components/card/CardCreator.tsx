import ImgAvatar from '../../assets/img/image-avatar.png'
import './CardCreator.css'
import React, { ImgHTMLAttributes } from 'react'
import { TypeOfTag } from 'typescript'


interface ICardCreator {
 data : {
    creatorAvatar : string,
    creatorName : string
 }  
}

const CardCreator : React.FC<ICardCreator> = ({
  data
}) => {
  return (
<div className='card__creator'>

    <div className='card__creator__img'>

        <img src={require('../../assets/img/' + data.creatorAvatar)}/>

    </div>

    <div className='card__creator__name'>

       <h3>creation of <a href="#">{ data.creatorName }</a></h3> 
            
    </div>
</div>
  )
}

export default CardCreator;