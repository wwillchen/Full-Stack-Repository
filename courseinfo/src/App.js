const App = () => {
  const name = 'Half Stack application development'
  const course = [
      { name : 'Fundamentals of React', exercises : 10 },
      { name : 'Using props to pass data', exercises : 7 },
      { name : 'State of a component', exercises : 14 }
    ]

  return (
    <div>
      <Header course={name}/>
      <Content course={course}/>
      <Total exercise1={course[0].exercises} exercise2={course[1].exercises} exercise3={course[2].exercises}/>
    </div>
  )
}

const Header = (props) => {
  return (
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}

const Content = ({course}) => {
  return (
  <div>
    <Part course={course[0]}/>
    <Part course={course[1]}/>
    <Part course={course[2]}/>
  </div>
  )
}

const Part = ({course}) => (
  <div>
    <p>{course.name} {course.exercises}</p>
  </div>
)

const Total = (props) => {
  return (
  <div>
    <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
  </div>
  )
}

export default App;
