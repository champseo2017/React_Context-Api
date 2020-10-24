import { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);
  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    const keyId = Math.random().toString(36).substring(7);
  
    setMovies(prevMovies => [...prevMovies, {
        name: name,
        price: price,
        id:keyId
    }])
  };

  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
