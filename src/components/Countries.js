import { useContext } from "react";
import { CountriesData } from "../App";
import { Container, Table } from "react-bootstrap";

function Countries() {
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
      <h3>COUNTRY LIST</h3>
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
          {useContext(CountriesData).map((country) => {
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

export default Countries;
