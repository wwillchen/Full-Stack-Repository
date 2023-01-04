import { useState } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [filter, setFilter] = useState(false)

  const handleNewSubmissions = (event) => {
    event.preventDefault()
    const newEntry = {name: newName, number: newNumber}
    
    newEntryChecker(newEntry)
  }

  const newEntryChecker = (entry) => {
    if(persons.find(person => person.name == entry.name)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(entry))
      console.log(persons)
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
    if (event.target.value == '') {
      setFilter(false)
    }
    else{
      setFilter(true)
    }
  }

  const display = filter
    ? persons.filter(person => person.name.toUpperCase().startsWith(newFilter.toUpperCase()))
    : persons

  return(
    <div>
      <h2>Phonebook</h2>
      <Filter inputFilter={newFilter} handleInputFilter={handleNewFilter}/>
      <h2>Add a new</h2>
      <PersonForm inputName={newName} inputNumber={newNumber} handleNewSubmission={handleNewSubmissions}
        onChangeName={handleNewName} onChangeNumber={handleNewNumber}/>
      <h2>Numbers</h2>
      <Persons show={display}/>
    </div>
  )
}

export default App;
