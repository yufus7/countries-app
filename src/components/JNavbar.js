import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Countries from "../Pages/Countries";
import Capital from "../Pages/Capital";
import Search from "../Pages/Search";

function JNavbar() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            style={{ textDecoration: "none", color: "white" }}
          >
            Countries
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/countries"
              style={{ textDecoration: "none", color: "white" }}
            >
              All Countries
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/capital"
              style={{ textDecoration: "none", color: "white" }}
            >
              Capital Search
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/search"
              style={{ textDecoration: "none", color: "white" }}
            >
              Search
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/capital" element={<Capital />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default JNavbar;
