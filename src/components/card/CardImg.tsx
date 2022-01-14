import React, { ImgHTMLAttributes } from 'react'
import { TypeOfTag } from 'typescript'
import ImgEquilibrium from '../../assets/img/image-equilibrium.jpg'; 
import { ReactComponent as IconView } from '../../assets/icon/icon-view.svg'
import './CardImg.css'


const CardImg : React.FC<{}> = (props) => {
   return (
<div className='card__img'>

     <img src={ImgEquilibrium} alt='equilibrium' />

      <div className='img__icon-view'>

         <IconView />

      </div>

 </div> /* end card__img */
   )
}

 export default CardImg;