import React from "react";

const Persons = ({ filteredPersons, handleToggleDelete }) => {

  const confirmDelete = (id,name) => {
    if (window.confirm(`Estas seguro que deseas borrar a ${name}`)){
      handleToggleDelete(id)
    }
  }
  return (
    <div>
      <ul>
        {filteredPersons.map((person) => (
          <div key={person.id}>
            <li>
              {person.name} {person.number}{" "}
              <button onClick={() => confirmDelete(person.id,person.name)} >delete</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Persons; 
