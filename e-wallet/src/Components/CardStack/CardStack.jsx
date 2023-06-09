import './CardStack.scss';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';


function CardStack() {
    const creditCards = useSelector((state)=> {return state.creditCards})

    const CardStackComponents = creditCards.map((card, index) => {
        return( <Card 
        cardNumber={card.cardNumber} 
        cardHolder={card.cardHolder}
        validThru={card.validThru}
        ccv={card.ccv}
        vendor={card.vendor}
        id= {card.cardNumber}
        key={index} 
        />
        )
    })

    return( 
        <section className='card-stack'>
            <article className='card-stack__grid'>
            { CardStackComponents  }
            </article>
        </section>
    )
}

export default CardStack