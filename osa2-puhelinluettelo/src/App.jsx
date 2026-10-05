import { useState, useEffect } from 'react'
import personService from './services/persons'
import Phonebook from './components/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  },
    []
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    if (existingPerson) {
      if (confirm(`Update number for ${newName}?`)) {
        const updatedPerson = { name: existingPerson.name, number: newNumber }
        personService
          .update(existingPerson.id, updatedPerson)
          .then(response => {
            setPersons(persons => persons.map(person => {
              if (person.id === response.id) {
                return response
              }
              return person
            }))
            setNewName('')
            setNewNumber('')
          })
      }
      return
    }
    const person = { name: newName, number: newNumber }
    personService
      .create(person)
      .then(response => {
        setPersons(persons => persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setSearchString(event.target.value.toLowerCase())
  }
  const handleDelete = id => {
    const personName = persons.find(person => person.id === id).name
    if (!confirm(`Delete ${personName} permanently?`)) {
      return
    }
    personService
      .remove(id)
      .then(() => setPersons(persons => persons.filter(person => person.id !== id)))
      .catch(() => alert('The person was already deleted.'))
  }
  const config = {
    personConfig: {
      persons: persons.filter((person) => person.name.toLowerCase().includes(searchString)),
      handleDelete: handleDelete,
    },
    formConfig: {
      nameValue: newName,
      numberValue: newNumber,
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