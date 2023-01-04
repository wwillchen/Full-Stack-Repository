const PersonForm = ({inputName, inputNumber, handleNewSubmission, onChangeName, onChangeNumber}) => {
  return(
    <form onSubmit={handleNewSubmission}>
        <div>name: <input value={inputName} onChange={onChangeName}/></div>
        <div>number: <input value={inputNumber} onChange={onChangeNumber}/></div>
        <div><button type="submit">add</button></div>
      </form>
  )
}

export default PersonForm