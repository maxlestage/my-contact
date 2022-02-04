import "./App.css";

import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchPerson, setSearchPerson] = useState("");

  const allPersons = persons.map((person) => {
    return person.name;
  });

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    allPersons.forEach((name) => {
      if (name === newName) {
        return alert(`${newName} is already added to phonebook`);
      } else {
        setPersons(persons.concat(personObject));
        setNewName("");
        setNewNumber("");
      }
    });
  };

  console.log(allPersons);

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberchange = (event) => {
    setNewNumber(event.target.value);
  };

  const search = (e) => setSearchPerson(e.target.value);

  console.log(searchPerson);

  const filteredNames = allPersons.filter((name) => {
    return name.includes(searchPerson);
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <p>
          filter shown with : <input value={searchPerson} onChange={search} />
        </p>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberchange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filteredNames.length > 0 ? (
          <ul>
            {filteredNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        ) : (
          <p>Nothing</p>
        )}
      </div>
    </div>
  );
};

export default App;
