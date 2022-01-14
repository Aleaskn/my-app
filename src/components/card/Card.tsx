import React, { ImgHTMLAttributes } from 'react'
import { TypeOfTag } from 'typescript'
import './Card.css'
import { ReactComponent as IconEth } from '../../assets/icon/icon-ethereum.svg'
import { ReactComponent as IconData } from '../../assets/icon/icon-clock.svg'
import { ReactComponent as IconView } from '../../assets/icon/icon-view.svg'
import ImgEquilibrium from '../../assets/img/image-equilibrium.jpg'; 
import ImgAvatar from '../../assets/img/image-avatar.png'



const Card : React.FC<{}> = (props) => {
    return (

       <section className='card__container'>

            <div className='card'>

                <div className='card__img'>

                    <img src={ImgEquilibrium} alt='equilibrium' />

                    <div className='img__icon-view'>

                        <IconView />

                     </div>

                </div> {/* end card__img */}

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

                <div className='card__creator'>

                    <div className='card__creator__img'>

                        <img src={ImgAvatar}/>

                    </div>

                    <div className='card__creator__name'>

                        <h3>creation of <a href="#">Jules Wyvern</a></h3> 
                                
                    </div>

                </div>

            </div>

     </section>
    )
}

export default Card;