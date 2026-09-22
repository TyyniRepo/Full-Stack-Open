/**
 * @param {{name: string}} props
 * @returns {React.JSX.Element}
 */
const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

/**
 * @param {{part: string, exercises: number}} props 
 * @returns {React.JSX.Element}
 */
const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

/**
 * @param {{name: string, parts: Array.<{name: string, exercises: number}>}} props 
 * @returns {React.JSX.Element}
 */
const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  )
}

/**
 * @param {{parts: Array.<{name: string, exercises: number}>}} props  
 * @returns {React.JSX.Element}
 */
const Total = (props) => {
  const sum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10
    }, {
      name: 'Using props to pass data',
      exercises: 7
    }, {
      name: 'State of a component',
      exercises: 14
    }]
  }

  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App