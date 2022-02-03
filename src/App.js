import "./App.css";

import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("Button Clicked", event.target);
    const personObject = {
      id: persons.length + 1,
      name: newName,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <ul>
        {persons.map((person) => {
          return <li key={person.name + person.id}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
