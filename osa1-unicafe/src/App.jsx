import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Display = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) => {
  const goodCount = props.goodCount
  const neutralCount = props.neutralCount
  const badCount = props.badCount
  const total = goodCount + neutralCount + badCount

  if (total < 1) {
    return <div>no feedback given yet</div>
  }

  const goodValue = 1
  const badValue = -1
  const average = total
    ? ((goodCount * goodValue) + (badCount * badValue)) / total
    : "-"
  const positive = total
    ? goodCount / total * 100
    : "-"
  return (
    <table>
      <tbody>
        <Display text="good" value={goodCount} />
        <Display text="neutral" value={neutralCount} />
        <Display text="bad" value={badCount} />
        <Display text="total" value={total} />
        <Display text="average" value={average} />
        <Display text="positive" value={positive.toString().concat(" %")} />
      </tbody>
    </table>
  )
}

function App() {
  const [goodCount, setGoodCount] = useState(0)
  const [neutralCount, setNeutralCount] = useState(0)
  const [badCount, setBadCount] = useState(0)

  const addCount = (setCount) => { setCount(value => value + 1) }

  return (
    <>
      <Header text="give feedback" />
      <Button text="good" onClick={() => addCount(setGoodCount)} />
      <Button text="neutral" onClick={() => addCount(setNeutralCount)} />
      <Button text="bad" onClick={() => addCount(setBadCount)} />
      <Header text="statistics" />
      <Statistics goodCount={goodCount} neutralCount={neutralCount} badCount={badCount} />
    </>
  )
}

export default App
