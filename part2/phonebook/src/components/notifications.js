const Approval = (name) => {
  return (
    <div className='success'>
      Added {name}
    </div>
  )
}

const Failed = (name) => {
  return (
    <div className='error'>
      information of {name} has already been removed from the server
    </div>
  )
}

export default { Approval, Failed }