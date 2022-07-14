import BasketItem from './BasketItem';

const Basket = ({ basket, totalPrice, removeItem }) => {
    return (
      <div>
        <h1>Basket</h1>
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
        <p>Total Price: £{totalPrice}</p>
      </div>
    )
}
// hello

export default Basket;