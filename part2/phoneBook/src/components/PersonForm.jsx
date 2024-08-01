import React from 'react'

const PersonForm = ({handleNameChange,handlePhoneChange,onSumbit,addNote,newName,newPhone}) => {
  return (
    <div>
      <form onSubmit={onSumbit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
