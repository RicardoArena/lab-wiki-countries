import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import { CountryDetails } from './components/CountryDetails';
import countries from './countries.json';
import { useState } from 'react';

function App() {
  const [countriesArr, setCountriesArr] = useState(countries);
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="d-flex">
            <CountriesList
              country={countriesArr.map((element) => {
                return element;
              })}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
