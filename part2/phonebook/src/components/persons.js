const Person = ({show}) => {
  return(
    <div>
      {show.map(person => 
      <div key={person.id}>   
          {person.name} {person.number}
      </div>
      )}
    </div>
  )
}

export default Person