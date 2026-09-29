const Person = ({ name }) => (<div>{name}</div>)

const Persons = ({ persons }) => {
    return (
        <>
            {persons.map(person =>
                <Person key={person.id} name={person.name} />
            )}
        </>
    )
}

export default Persons