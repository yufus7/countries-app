import { useState, useContext } from "react";
import { CountriesData } from "../App";
import { Container, Table } from "react-bootstrap";

function Capital() {
  const [searchCapital, setCapital] = useState("");

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
      <h3>CAPITAL SEARCH</h3>
      <input
        style={{
          borderRadius: "10px",
          padding: "5px 10px",
          marginBottom: "15px",
          width: "70%",
        }}
        type="text"
        placeholder="Search Capital..."
        value={searchCapital}
        autoFocus="autofocus"
        onChange={(e) => setCapital(e.target.value)}
      />
      {console.log(searchCapital)}
      <Table striped bordered>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Country Name</th>
            <th>Country Capital</th>
            <th>Country Region</th>
          </tr>
        </thead>
        <tbody>
          {useContext(CountriesData)
            .filter((value) => {
              if (searchCapital === "") {
                return value;
              } else if (
                value.capital &&
                value.capital
                  .toLocaleLowerCase("tr")
                  .includes(searchCapital.toLocaleLowerCase("tr"))
              ) {
                return value;
              } else return false;
            })
            .map((country, i) => {
              return (
                <tr key={i}>
                  <td>
                    <img
                      src={country.flag}
                      alt={country.name}
                      style={{
                        width: "50px",
                        maxHeight: "35px",
                      }}
                    />
                  </td>
                  <td>{country.name}</td>
                  <td>{country.capital}</td>
                  <td>{country.region}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Capital;
