import { useState } from "react";

import People from "./components/People";
import SearchBar from "./components/SearchBar";
import AddName from "./components/AddName";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const addName = (event) => {
    event.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(nameObject));

      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchInput = (event) => {
    setFilterName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar handleSearchInput={handleSearchInput} />

      <h2>add a new</h2>
      <AddName
        addName={addName}
        handleNameInput={handleNameInput}
        handleNumberInput={handleNumberInput}
      />

      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <People key={person.name} person={person} filterName={filterName} />
        ))}
      </div>
    </div>
  );
};

export default App;
