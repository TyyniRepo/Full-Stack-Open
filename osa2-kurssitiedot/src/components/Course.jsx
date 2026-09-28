const Header = (props) => <h1>{props.text}</h1>

const Part = ({ name, exercises }) => (
    <p>
        {name} {exercises}
    </p>
)

const Content = ({ parts }) => (
    <>
        {parts.map(part =>
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
    </>
)

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p>total of {total} exercises</p>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header text={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default Course