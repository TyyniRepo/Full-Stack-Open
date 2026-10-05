const Person = ({ name, number, handleDelete }) =>  {
    return (<div>{name} {number} <button onClick={handleDelete}>Delete</button></div>) 
}

const Persons = ({ persons, handleDelete }) => {
    return (
        <>
            {persons.map(person =>
                <Person key={person.id} name={person.name} number={person.number} handleDelete={() => handleDelete(person.id)} />
            )}
        </>
    )
}

export default Persons