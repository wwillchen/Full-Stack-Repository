const Person = ({show, removeMethod}) => {
  return(
    <div>
      {show.map(person => 
      <div key={person.id}>   
          {person.name} {person.number}
          <button onClick={() => removeMethod(person.id, person.name)}> delete </button>
      </div>
      )}
    </div>
  )
}

export default Person