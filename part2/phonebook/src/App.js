import { useEffect, useState } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personForm'
import Persons from './components/persons'
import numberService from './services/numberService'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    numberService
      .getAll()
      .then(initalNumbers => {
        setPersons(initalNumbers)
      })
  }, [])

  const remove = (id, name) => {
    if(window.confirm(`Delete ${name}?`)){
      numberService.deleteNumber(id)
      .then(response => {
        setPersons(persons.filter(personID => personID !== id))
      })
    }
  }

  const addNumber = (event) => {
    event.preventDefault()

    const processPerson = persons.filter(
      person => person.name === newName
      )
    
    if (processPerson.length == 0) {
      const newEntry = {name: newName, number: newNumber}
      numberService.addNew(newEntry)
        .then(Entry => {
          setPersons(persons.concat(Entry))
          setNewName('')
          setNewNumber('')
        })
    }
    
    else {
      if(window.confirm(
        `${processPerson[0].name} is already added to phonebook, replace the old number with a new one?`
      )){
        const updateNumber = {...processPerson[0], number: newNumber}
        numberService.update(processPerson[0].id, updateNumber)
          .then(entry => setPersons(persons.map(
            p => p.name !== updateNumber.name ? p : entry)))
      }
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
      <PersonForm inputName={newName} inputNumber={newNumber} handleNewSubmission={addNumber}
        onChangeName={handleNewName} onChangeNumber={handleNewNumber}/>
      <h2>Numbers</h2>
        <div>
          <Persons show={display} removeMethod={remove}/>
        </div>
    </div>
  )
}

export default App;
