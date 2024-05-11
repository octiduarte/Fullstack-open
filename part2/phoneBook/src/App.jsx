import axios from 'axios'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { useState, useEffect } from 'react'
import noteService from './service/notes'
const App = () => {
  const hook = () => {
    noteService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }
  
  useEffect(hook, [])

  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newSearch, setNewSearch] = useState(""); 

  const addNote = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newPhone,
    };

    const existingPerson = persons.find((person) => person.name === newName);
    
    if (existingPerson) {
      const id = existingPerson.id;
      if(window.confirm(`El nombre ${newName} ya existe, desea reemplazar el numero nuevo por el viejo?`)){
        noteService
        .update(id,personObject)
        .then((updatedPerson) => {
          setPersons(persons.map(person => person.id === id ? updatedPerson : person ));
        })
        setNewName("")
        setNewPhone("")
      }

    } 
    else {
      noteService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  );


const handleToggleDelete = (id) =>{
 noteService
 .remove(id)
 .then(() => {
  setPersons(persons.filter(person => person.id != id))
 })
}

  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleSearchChange} />
      <h3>Add a New</h3>
      <PersonForm
        onSumbit={addNote}
        newName={newName}
        newPhone={newPhone}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} handleToggleDelete={handleToggleDelete}/>
    </div>
  );
};

export default App;
