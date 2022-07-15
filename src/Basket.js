import BasketItem from './BasketItem';
import { H1, P } from './Components/Style';

const Basket = ({ basket, totalPrice, removeItem }) => {
    return (
      <div>
        <H1>Basket</H1>
        <ol>
          {basket.map((item, index) => {
            return (
              <BasketItem
                name={item.name}
                price={item.price}
                key={index}
                removeItem={() => removeItem(index)}
              />
            )
          })}
        </ol>
        <P>Total Price: £{totalPrice}</P>
      </div>
    )
}
// hello

export default Basket;