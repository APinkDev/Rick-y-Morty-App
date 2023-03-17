import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import { Pagination } from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialURL = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.info);
        setCharacters(data.results);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }
  const onNext = () => {
    fetchCharacters(info.next)
  }


  useEffect(() => {
    fetchCharacters(initialURL);
  }, []);

  // ---------------------
  return (
    <>
      <Navbar brand="Rick and Morty" />

      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
