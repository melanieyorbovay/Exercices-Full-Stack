import { useState } from 'react'

const StatisticsLine = (props) => {
  const { text, value } = props
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const Bouton = (props) => {
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
if (good + neutral + bad === 0) {
    return (
      <div>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good - bad) / (good + neutral + bad) || 0}</p>
      <p>positive {good / (good + neutral + bad) * 100 || 0} %</p>
    </div>
  )
}


const App = () => {
  const [good, SetGood] = useState(0)
  const [neutral, SetNeutral] = useState(0)
  const [bad, SetBad] = useState(0)

  const handleGoodClick = () => {
    SetGood(good + 1)
  }

  const handleNeutralClick = () => {
    SetNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    SetBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )

}


export default App
