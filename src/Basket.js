import BasketItem from './BasketItem';

const Basket = ({ basket }) => {
    return (
      <div>
        <h1>Basket</h1>
        <ol>
          {basket.map((item, index) => {
            return (
              <BasketItem
                name={item.name}
                price={item.price}
                // handleClick={() => removeItem(index)}
              />
            )
          })}
        </ol>
      </div>
    )
}
// hello

export default Basket;