const Person = ({ name, phone }) => (<div>{name} {phone}</div>)

const Persons = ({ persons }) => {
    return (
        <>
            {persons.map(person =>
                <Person key={person.id} name={person.name} phone={person.phone} />
            )}
        </>
    )
}

export default Persons