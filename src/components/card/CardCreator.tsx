import ImgAvatar from '../../assets/img/image-avatar.png'
import './CardCreator.css'
import React, { ImgHTMLAttributes } from 'react'
import { TypeOfTag } from 'typescript'


const CardCreator : React.FC<{}> = (props) => {
  return (
<div className='card__creator'>

    <div className='card__creator__img'>

        <img src={ImgAvatar}/>

    </div>

    <div className='card__creator__name'>

       <h3>creation of <a href="#">Jules Wyvern</a></h3> 
            
    </div>
</div>
  )
}

export default CardCreator;