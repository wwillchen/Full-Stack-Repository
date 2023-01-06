import { useEffect, useState } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
