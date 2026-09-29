import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      setMessage("This person is already in the phonebook")
      return
    }
    const id = Math.max(...persons.map(person => person.id)) + 1
    const person = { id: id, name: newName }
    setPersons(persons.concat(person))
    setNewName('')
  }
  const handleNameChange = (event) => {
    console.debug("event", event)
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm value={newName} message={message} handleSubmit={handleSubmit} handleNameChange={handleNameChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App