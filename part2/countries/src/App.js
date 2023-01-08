import { useState, useEffect } from 'react'
import Axios from 'axios'
import Display from './components/display'

const App = () => {
  const [countriesData, setCountriesData] = useState([])
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    Axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountriesData(response.data)
      })
  }, [])
  
  useEffect(() => {
    setCountries(
      countriesData.filter(country => 
        country.name.common.toUpperCase().includes(query.toUpperCase())
      )
    )}, [query]) 

  const handleQuery = (event) => {    
    setQuery(event.target.value)
  }

  return(
    <div>
      <form>
        find countries <input value={query} onChange={handleQuery}/>
      </form>
      <div>
        <Display toDisplayCountries={countries} setToDisplayCountries={setCountries}/>
      </div>
    </div>
  )
}

export default App;
