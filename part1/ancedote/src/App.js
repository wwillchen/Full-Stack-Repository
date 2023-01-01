import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  //randomize function that picks up unique numbers
  const randomizeSelected = () => {
    while (true) {
      const value = Math.floor(Math.random() * anecdotes.length)
      if (value != selected) {
        setSelected(value)
        break
      }
    }
  }

  const incrementVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    console.log(Math.max(...votes))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} voteTotal={'has ' + votes[selected] + ' votes'}/>
      <Button onClick={incrementVote} text='vote'/>
      <Button onClick={randomizeSelected} text='next anecdote'/>
      <h1>Anecdote with the most votes</h1>
      <Anecdote text={anecdotes[votes.indexOf(Math.max(...votes))]} voteTotal={'has ' + votes[selected] + ' votes'}/>
    </div>
  )
}

const Anecdote = ({text, voteTotal}) => {
  return (
    <div>
      <p>{text}</p>
      <p>{voteTotal}</p>
    </div>
  )
}

const Button = ({onClick, text}) => 
  <><button onClick={onClick}>{text}</button></>

export default App;
