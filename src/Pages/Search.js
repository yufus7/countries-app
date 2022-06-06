import { useState, useContext } from "react";
import { CountriesData } from "../App";
import { Container, Table } from "react-bootstrap";

function Capital() {
  const [search, setSearch] = useState("");

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
      <h3>SEARCH</h3>
      <input
        style={{
          borderRadius: "10px",
          padding: "5px 10px",
          marginBottom: "15px",
          width: "70%",
        }}
        type="text"
        placeholder="Search..."
        value={search}
        autoFocus="autofocus"
        onChange={(e) => setSearch(e.target.value)}
      />
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
              if (search === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(search.toLowerCase()) ||
                (value.capital &&
                  value.capital.toLowerCase().includes(search.toLowerCase())) ||
                value.region.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              } else return false;
            })
            .map((country) => {
              return (
                <tr key={country.numericCode}>
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
