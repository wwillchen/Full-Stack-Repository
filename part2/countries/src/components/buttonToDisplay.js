const ButtonToDisplay = ({toDisplayCountry, updateCountry}) => {
  return (
    <div key={toDisplayCountry.name.common}>
        <div>{toDisplayCountry.name.common}</div>
        <button onClick={() => updateCountry([toDisplayCountry])}>show</button>
    </div>
  )
}

export default ButtonToDisplay