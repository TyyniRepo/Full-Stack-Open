const PersonForm = ({
    nameValue,
    numberValue,
    message,
    handleSubmit,
    handleNameChange,
    handleNumberChange,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={nameValue} onChange={handleNameChange} />
            </div>
            <div>
                phone: <input value={numberValue} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            <div>{message}</div>
        </form>
    )
}

export default PersonForm