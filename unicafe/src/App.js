import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={good + neutral + bad}/>
      <p></p> 
    </div>

  )
}

const Statistics = ({good, neutral, bad, total}) => {
  if (total == 0) {
    return (
    <div>
      <p>No feedback given</p>
    </div>
    )
  }
    return (
      <div>
        <StatisicLine text='good' value={good}/>
        <StatisicLine text='neutral' value={neutral}/>
        <StatisicLine text='bad' value={bad}/>
        <StatisicLine text='all' value={total}/>
        <StatisicLine text='average' value={total / 3}/>
        <StatisicLine text='positive' value={good / total + ' %'}/>
      </div>
    )
}

const StatisicLine = ({text, value}) => <div>{text} {value}</div>

export default App;
