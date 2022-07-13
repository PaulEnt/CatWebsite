const Cat = ({ name, image, species, alt, price }) => {
    return (
      <div>
        <img src={image} alt={alt} />
        <h2>{name}</h2>
        <p>{species}</p>
        <p>{price}</p>
      </div>
    );
  };
  export default Cat;