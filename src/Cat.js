const Cat = ({ name, image, species, alt, price, handleClick, basket}) => {

  return (
    <div>
      <img src={image} alt={alt} />
      <h2>{name}</h2>
      <p>{species}</p>
      <p>£{price}</p>
      <button onClick={handleClick}>Add Item</button>
    </div>
  );
};
export default Cat;