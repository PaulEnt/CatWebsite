const Cat = ({ name, image, species, alt }) => {
    return (
      <div>
        <img src={image} alt={alt} />
        <h2>{name}</h2>
        <p>{species}</p>
      </div>
    );
  };
  export default Cat;