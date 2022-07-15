import { useState, useEffect } from "react";
import Cat from "./Cat";
import faker from "faker";
import Basket from "./Basket";
import Modal from "react-modal";
import { Container, CatContainer, H1, H2 } from "./Components/Style";
import { GlobalStyles } from "./Components/GlobalStyles";

//Stying for the basket Modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const App = () => {
  //All info related to the cats is stored here
  const [storedCats, setStoredCats] = useState([]);

  //Basket info is stored here
  const [storedBasket, setStoredBasket] = useState([]);

  //Total price is updated here
  const [totalPrice, setTotalPrice] = useState(0);

  //Modal open and close state stored here
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getCatImages = async () => {
      //Fetching the cat data from the api
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=small&limit=13"
      );
      const data = await response.json();
      //Loop through the api data. Generate faker values and take the image link from the api data. Store all of that in an object and add it to the storedCats state
      data.forEach((catItem) => {
        const name = faker.name.firstName();
        const species = faker.animal.cat();
        const price = Number(faker.commerce.price());
        const url = catItem.url;
        const newCat = { name: name, species: species, price: price, url: url };
        setStoredCats((storedCats) => [...storedCats, newCat]);
      });
    };
    
    //Call our getCatImages on the initial render
    getCatImages();

    // Modal screenreader accessibility
    Modal.setAppElement('#root');
  }, []);

  //Adding an item to the basket
  const handleClick = (index) => {
    setStoredBasket([...storedBasket, {name: storedCats[index].name, price: storedCats[index].price}])
    setTotalPrice((totalPrice) => (totalPrice + storedCats[index].price))
  }

  //Removing an item from the basket
  const removeItem = (index) => {
    setTotalPrice((totalPrice) => (totalPrice - storedBasket[index].price))
    let basket = [...storedBasket];
    basket.splice(index, 1);
    setStoredBasket(basket);
  }
 
  //Opening and closing the Modal
  const openModal = () => {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <GlobalStyles/>
      {/* <button onClick={closeModal}>Close the basket</button> */}
      <H1>CATS</H1>
      <button id="openbutton" onClick={openModal}>Open the basket</button>
      <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Basket"
      >
      <Basket
        basket={storedBasket}
        totalPrice={totalPrice}
        removeItem = {removeItem}
      />
      </Modal>
      <CatContainer>
        {/* If storedCats has data, map through the array */}
        {storedCats ? (
          storedCats.map((catItem, index) => {
            return (
              //Generate a new cat component using the values stored in the storedCats state
              <Cat
                image={catItem.url}
                name={catItem.name}
                species={catItem.species}
                price={catItem.price}
                alt="Picture of cat"
                key={index}
                handleClick={() => handleClick(index)}
              />
            );
          })
        ) : (
          //Display 'loading' if there is no data from the api yet
          <H2>Loading...</H2>
        )}
      </CatContainer>
    </Container>
  );
};

export default App;
