import { useState, useEffect } from "react";
import Cat from "./Cat";
import faker from "faker";
import Basket from "./Basket";

const App = () => {
  const [storedCats, setStoredCats] = useState([]);
  const [storedBasket, setStoredBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)

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
  }, []);

  const handleClick = (index) => {
    // [storedCats[index].name, storedCats[index].price]
    setStoredBasket([...storedBasket, {name: storedCats[index].name, price: storedCats[index].price}])
    setTotalPrice((totalPrice) => (totalPrice + storedCats[index].price))
  }

  return (
    <div id="container">
      <h1>CATS</h1>
      <Basket
        basket={storedBasket}
        totalPrice={totalPrice}
      />
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
