import { useState } from 'react'
import Phonebook from './components/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', phone: '040-123456' },
    { id: 2, name: 'Ada Lovelace', phone: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', phone: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [message, setMessage] = useState('')
  const [searchString, setSearchString] = useState('')

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
    const person = { id: id, name: newName, phone: newPhone }
    setPersons(persons.concat(person))
    setNewName('')
    setNewPhone('')
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }
  const handleFilterChange = (event) => {
    setSearchString(event.target.value.toLowerCase())
  }
  const config = {
    persons: persons.filter((person) => person.name.toLowerCase().includes(searchString)),
    formConfig: {
      nameValue: newName,
      phoneValue: newPhone,
      message: message,
      handleSubmit: handleSubmit,
      handleNameChange: handleNameChange,
      handlePhoneChange: handlePhoneChange,
    },
    filterConfig: {
      handleFilterChange: handleFilterChange,
    }
  }
  return <Phonebook {...config} />
}

export default App