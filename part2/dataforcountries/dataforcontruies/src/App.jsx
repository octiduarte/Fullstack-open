import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import noteService from "./service/restcontruies";
import "./App.css";
import Contruies from "./components/Contruies";

function App() {

  const [contruies, setContruies] = useState([]);
  const [newSearch, setNewSearch] = useState("");
  


  useEffect (() => {
    noteService
      .getAll()
      .then((contruies) => {
        setContruies(contruies);
      })
      .catch((error) => {
        console.log("Error fetching contruies: ", error);
      });
  }, []);


  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  const filteredContruies = contruies.filter(
    (contruie) =>
      contruie.name &&
      contruie.name.common.toLowerCase().includes(newSearch.toLowerCase())
  );

  return (
    <div>
      <div>
        find contruies
        <Filter value={newSearch} onChange={handleSearchChange} />
      </div>
      <div>
        <Contruies filteredContruies={filteredContruies} />
      </div>
    </div>
  );
}

export default App;
