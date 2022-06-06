import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import JNavbar from "./components/JNavbar";

export const CountriesData = React.createContext();
export const CountryData = React.createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    return await axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <div className="App">
      <CountriesData.Provider value={countries}>
        <JNavbar />
        {loading && <h4>loading...</h4>}
      </CountriesData.Provider>
    </div>
  );
}

export default App;
