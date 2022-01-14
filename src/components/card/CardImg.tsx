import React, { ImgHTMLAttributes } from 'react'
import { TypeOfTag } from 'typescript'
import ImgEquilibrium from '../../assets/img/image-equilibrium.jpg'; 
import { ReactComponent as IconView } from '../../assets/icon/icon-view.svg'
import './CardImg.css'

interface ICardImg {
      imgUrl : string

}

const CardImg : React.FC<ICardImg> = ({ imgUrl }) => {
   return (
<div className='card__img'>

     <img src={require('../../assets/img/' + imgUrl)} alt='equilibrium' />

      <div className='img__icon-view'>

         <IconView />

      </div>

 </div> /* end card__img */
   )
}

 export default CardImg;