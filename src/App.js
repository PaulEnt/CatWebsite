import { useState, useEffect } from "react";
import Cat from "./Cat";
import faker from "faker";
import Basket from "./Basket";
import Modal from "react-modal";

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
  const [storedCats, setStoredCats] = useState([]);
  const [storedBasket, setStoredBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getCatImages = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=small&limit=12"
      );
      const data = await response.json();

      data.forEach((catItem) => {
        const name = faker.name.firstName();
        const species = faker.animal.cat();
        const price = Number(faker.commerce.price());
        const url = catItem.url;
        const newCat = { name: name, species: species, price: price, url: url };
        setStoredCats((storedCats) => [...storedCats, newCat]);
      });
    };
    getCatImages();
    Modal.setAppElement('#root'); // Modal screenreader accessibility
  }, []);

  const handleClick = (index) => {
    setStoredBasket([...storedBasket, {name: storedCats[index].name, price: storedCats[index].price}])
    setTotalPrice((totalPrice) => (totalPrice + storedCats[index].price))
  }

  const openModal = () => {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="container">
      <button onClick={openModal}>Open the basket</button>
      {/* <button onClick={closeModal}>Close the basket</button> */}
      <h1>CATS</h1>
      <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Basket"
      >
      <Basket
        basket={storedBasket}
        totalPrice={totalPrice}
      />
      </Modal>
      <div id="card">
        {storedCats ? (
          storedCats.map((catItem, index) => {
            return (
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
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default App;
