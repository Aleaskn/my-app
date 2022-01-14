import React, { ImgHTMLAttributes } from 'react'
import { TypeOfTag } from 'typescript'
import './Card.css'
import CardImg from './CardImg'
import CardCreator from './CardCreator'
import { ReactComponent as IconEth } from '../../assets/icon/icon-ethereum.svg'
import { ReactComponent as IconData } from '../../assets/icon/icon-clock.svg'


const Card : React.FC<{}> = (props) => {
    return (

       <section className='card__container'>

            <div className='card'>

                <CardImg />

            <div className='card__info'>
                
                <div className='card__title'>
                    
                    <h2 className='card__title'>equilibrium #3429</h2>

                </div>

                <p className='card__text'>Our Equilibrium collection promotes balance and calm </p>

                <div className='cripto-info'>

                    <div className='cripto-info__value'>

                            <IconEth className='cripto__eth' />

                        <h3>0.041eth</h3>

                    </div>

                    <div className='cripto-info__data'>

                            <IconData className='cripto__data'/>

                        <h3>3 days left</h3>

                    </div>

                </div>
            
            </div>

            <div className='card__line'></div> {/* end card__line */}

               <div className='card__avatar'>
                    <CardCreator />
               </div>
               
            </div>

     </section>
    )
}

export default Card;