import React, { ImgHTMLAttributes } from 'react'
import { TypeOfTag } from 'typescript'
import './Card.css'
import CardImg from './CardImg'
import CardCreator from './CardCreator'
import { ReactComponent as IconEth } from '../../assets/icon/icon-ethereum.svg'
import { ReactComponent as IconData } from '../../assets/icon/icon-clock.svg'

interface IValue {
    value : string,
    tipeValue : string
}

interface ICreator {
    creatorAvatar : string,
    creatorName : string
}

interface ICard {
    img : string,
    title : string,
    context : string,
    value : IValue,
    expireData : string,
    creator : ICreator
  }

  interface ICardAllData {
      data : ICard
  }

const Card : React.FC<ICardAllData> = ({
    data
}) => {
    return (
       <section className='card__container'>

            <div className='card'>

                <CardImg imgUrl={data.img}/>

            <div className='card__info'>
                
                <div className='card__title'>
                    
                    <h2 className='card__title'>{ data.title }</h2>

                </div>

                <p className='card__text'>{ data.context } </p>

                <div className='cripto-info'>

                    <div className='cripto-info__value'>

                            <IconEth className='cripto__eth' />

                        <h3>{ data.value.value }{ data.value.tipeValue }</h3>

                    </div>

                    <div className='cripto-info__data'>

                            <IconData className='cripto__data'/>

                        <h3>{ data.expireData }</h3>

                    </div>

                </div>
            
            </div>

            <div className='card__line'></div> {/* end card__line */}

                <CardCreator data={ data.creator }/>

            </div>

     </section>
    )
}

export default Card;