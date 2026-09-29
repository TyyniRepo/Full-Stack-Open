const PersonForm = ({value, message, handleSubmit, handleNameChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={value} onChange={handleNameChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            <div>{message}</div>
        </form>
    )
}

export default PersonForm