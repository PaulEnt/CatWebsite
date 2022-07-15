const BasketItem = ({name, price, removeItem}) => {
    return(
        <div>
         <li>{name}, {price}</li>
         <button onClick={removeItem}>Remove Item</button>
        </div>
    )
}

export default BasketItem;