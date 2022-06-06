import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

function Home() {
  const [country, setCountry] = useState([
    {
      name: "Turkey",
      capital: "Ankara",
      region: "Asia",
      population: "84339067",
      demonym: "Turkish",
      flag: "https://flagcdn.com/tr.svg",
    },
  ]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCountry(search);
  }, [search]);

  const loadCountry = async (country) => {
    return await axios
      .get(`https://restcountries.com/v2/name/${country}`)
      .then((response) => setCountry(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <Container
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        padding: "20px",
        backgroundColor: "#EEF1EF",
        borderRadius: "0px 30px",
      }}
    >
      <h3>COUNTRY DETAILS</h3>
      <input
        style={{
          borderRadius: "10px",
          padding: "5px 10px",
          marginBottom: "15px",
          width: "70%",
        }}
        type="text"
        placeholder="Turkey..."
        value={search}
        autoFocus="autofocus"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Row>
        <Col>
          <img
            style={{ maxWidth: "100%", borderRadius: "30px" }}
            src={country[0].flag}
            alt=""
          />
        </Col>
        <Col>
          <div style={{ textAlign: "center" }}>
            <br />
            <h2>{country[0].name}</h2>
            <h3>Capital: {country[0].capital}</h3>
            <br />
            <h5>Region: {country[0].region}</h5>
            <h5>Population: {country[0].population}</h5>
            <h5>Demonym: {country[0].demonym}</h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
