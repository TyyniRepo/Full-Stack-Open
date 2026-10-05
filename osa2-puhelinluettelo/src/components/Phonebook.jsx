import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const Phonebook = (props) => {
    return (<>
        <h2>Phonebook</h2>
        <Filter {...props.filterConfig} />
        <h3>Add new</h3>
        <PersonForm {...props.formConfig} />
        <h2>Numbers</h2>
        <Persons {...props.personConfig} />
    </>)
}

export default Phonebook