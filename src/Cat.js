// import './App.css';
import { CatCard, Img, H2, P } from "./Components/Style";

const Cat = ({ name, image, species, alt, price, handleClick }) => {

  return (
    <CatCard>
      <Img src={image} alt={alt} />
      <H2>{name}</H2>
      <P>{species}</P>
      <P>£{price}</P>
      <button onClick={handleClick}>Add Item</button>
    </CatCard>
  );
};
export default Cat;