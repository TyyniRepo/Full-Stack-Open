const PersonForm = ({
    nameValue,
    phoneValue,
    message,
    handleSubmit,
    handleNameChange,
    handlePhoneChange,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={nameValue} onChange={handleNameChange} />
            </div>
            <div>
                phone: <input value={phoneValue} onChange={handlePhoneChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            <div>{message}</div>
        </form>
    )
}

export default PersonForm