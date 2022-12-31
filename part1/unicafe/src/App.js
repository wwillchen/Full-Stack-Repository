import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({good: 0, neutral: 0, bad: 0})
  
  const increaseGood = () => 
    setClicks({...clicks, good: clicks.good + 1})
  const increaseNeutral = () => 
    setClicks({...clicks, neutral: clicks.neutral + 1})
  const increaseBad = () => 
    setClicks({...clicks, bad: clicks.bad + 1})

  return (
    <div>
      <h1>give feedback</h1>
      <Button increaseGood={increaseGood} increaseNeutral={increaseNeutral} increaseBad={increaseBad}/>
      <h1>statistics</h1>
      <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} 
                  total={clicks.good + clicks.neutral + clicks.bad}/>
      <p></p> 
    </div>

  )
}

const Statistics = ({good, neutral, bad, total}) => {
  if (total == 0) {
    return(
    <div>
      <p>No feedback given</p>
    </div>
    )
  }
    return(
      <div>
        <table>
            <StatisicLine text='good' value={good}/>
            <StatisicLine text='neutral' value={neutral}/>
            <StatisicLine text='bad' value={bad}/>
            <StatisicLine text='all' value={total}/>
            <StatisicLine text='average' value={total / 3}/>
            <StatisicLine text='positive' value={good / total + ' %'}/>
        </table>
      </div>
    )
}

//each individual statistic
const StatisicLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

//buttons used to submit feedback
const Button = ({increaseGood, increaseNeutral, increaseBad}) => {
  return(
    <div>
      <button onClick={increaseGood}>good</button>
      <button onClick={increaseNeutral}>neutral</button>
      <button onClick={increaseBad}>bad</button>
    </div>
  )
}

export default App;
