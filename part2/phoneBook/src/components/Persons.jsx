import React from 'react'

const Persons = ({filteredPersons}) => {
  return (
    <div>
      <ul>
        {filteredPersons.map((person, index) => (
          <div key={index}>
            <li>{person.name}</li>
            <li>{person.number}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Persons
