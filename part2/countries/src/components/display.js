import WeatherData from './weatherData'
import ButtonToDisplay from './buttonToDisplay'

const Display = ({toDisplayCountries, setToDisplayCountries}) => {

    if (toDisplayCountries.length > 10) {
      return(
        <div>Too many matches, specify another filter</div>
      )
    }
  
    else if (toDisplayCountries.length == 1) {
      const highlight = toDisplayCountries[0]
      return(
        <div>
          <h1>{highlight.name.common}</h1>
          <div>Capital {highlight.capital}</div>
          <div>Area {highlight.area}</div>
          <h2>Languages:</h2>
          <ul>
            {Object.values(highlight.languages).map(language =>
              <li key={language}>{language}</li>)}
          </ul>
          <img src={highlight.flags.png} alt={`${highlight.name.common} flag`} />
          <WeatherData capital={highlight.capital[0]}/>
        </div>
      )
    }
  
    else {
      return(
        toDisplayCountries.map(country => 
          <>
            <ButtonToDisplay toDisplayCountry={country} updateCountry={setToDisplayCountries}/>
          </>
        )
      )
    }
  }

export default Display