const Filter = ({ handleFilterChange }) => {
    return (
        <div>
            search: <input onChange={handleFilterChange} />
        </div>
    )
}

export default Filter