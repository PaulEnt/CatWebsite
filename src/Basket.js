import BasketItem from './BasketItem';

const Basket = ({ basket, totalPrice }) => {
    return (
      <div>
        <h1>Basket</h1>
        <ol>
          {basket.map((item) => {
            return (
              <BasketItem
                name={item.name}
                price={item.price}
                // handleClick={() => removeItem(index)}
              />
            )
          })}
        </ol>
        <p>Total Price: £{totalPrice}</p>
      </div>
    )
}
// hello

export default Basket;