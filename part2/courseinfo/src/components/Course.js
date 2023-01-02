const Content = ({course}) => {
  console.log(course)
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map(point => 
        <p key={point.id}>
          {point.name} {point.exercises}
        </p>
      )}
    </div>
    )
  }  

const Total = ({course}) => {
    return (
      <h3>
        total of {course.parts.reduce((sum, point) => sum += point.exercises, 0)} exercises
      </h3>
    )
  }

const Course = ({courses}) => {
  console.log(courses)
    return(
      <div>
        <h1>Web development curriculum</h1>
        {courses.map(course => {
          return(
            <div>
              <Content course={course}/>
              <Total course={course}/>
            </div>
          )
        }
        )}
      </div>  
    )
} 

export default Course