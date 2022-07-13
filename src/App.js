import { useState, useEffect } from "react";
import Cat from "./Cat";

const App = () => {

  const [catPic, setCatPic] = useState([]);

  useEffect(() => {
    const getCatImages = async () => {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?size=small&limit=12");
        const data = await response.json();
        setCatPic(data);
      };
    getCatImages();
  }, []);

  return (
    <div id="container">
      <h1>CATS</h1>
      <div id="card">
        {catPic ? (
          catPic.map((catItem, index) => {
            return <Cat image={catItem.url} name="Roger" species="British Shorthair" alt="Picture of cat" key={index} />;
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default App;