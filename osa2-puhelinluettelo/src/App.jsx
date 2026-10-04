import { useState, useEffect } from 'react'
import axios from 'axios'
import Phonebook from './components/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState('')
  const [searchString, setSearchString] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      /**
       * Synchronous alert() causes a Chrome warning about the handler taking too long,
       * using an inline validation message instead.
       */
      setMessage(`${newName} is already in the phonebook`)
      return
    }
    const id = Math.max(...persons.map(person => person.id)) + 1
    const person = { name: newName, number: newNumber, id: id }
    setPersons(persons.concat(person))
    setNewName('')
    setNewNumber('')
  }
  const handleNameChange = (event) => {
    if (message.length) {
      setMessage('')
    }
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setSearchString(event.target.value.toLowerCase())
  }
  const config = {
    persons: persons.filter((person) => person.name.toLowerCase().includes(searchString)),
    formConfig: {
      nameValue: newName,
      numberValue: newNumber,
      message: message,
      handleSubmit: handleSubmit,
      handleNameChange: handleNameChange,
      handleNumberChange: handleNumberChange,
    },
    filterConfig: {
      handleFilterChange: handleFilterChange,
    }
  }
  return <Phonebook {...config} />
}

export default App