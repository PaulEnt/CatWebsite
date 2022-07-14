import { useState, useEffect } from "react";
import Cat from "./Cat";
import faker from "faker";

const App = () => {
  const [storedCats, setStoredCats] = useState([]);

  useEffect(() => {
    const getCatImages = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=small&limit=12"
      );
      const data = await response.json();

      data.forEach((catItem) => {
        const name = faker.name.firstName();
        const species = faker.animal.cat();
        const price = faker.commerce.price();
        const url = catItem.url;
        const newCat = { name: name, species: species, price: price, url: url };
        setStoredCats((storedCats) => [...storedCats, newCat]);
      });
    };
    getCatImages();
  }, []);

  return (
    <div id="container">
      <h1>CATS</h1>
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
