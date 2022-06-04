import "./style.css";
import logo from "../src/images/germanLogo.png";
import logo1 from "../src/images/logo1.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Cases from "./Cases.jsx";
import Article from "./Article.jsx";
import Translation from "./Translation.jsx";
import Translate from "./En-En.jsx";
import ListedWord from "./ListedWord.jsx";
import TranslateToGerman from "./De-En.jsx";
import Home from "./Home";
import Login from "./Login";
import { useState, useEffect } from "react";

const tokenFromStorage = localStorage.getItem("token");
const tokenDefault = tokenFromStorage ? tokenFromStorage : null;

export default function App() {
  const [token, setToken] = useState(tokenDefault);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <div className="App">
      {token ? (
        <div>
          <img className="background-logo" src={logo} alt="" />
          <Navbar className="navigation" expand="md">
            <Container fluid>
              <NavLink to="/">
                <img className="nav-logo" src={logo1} alt="" />
              </NavLink>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  aria-controls="navbarScroll"
                  className="p-1 d-flex sub-nav "
                  style={{ maxHeight: "190px" }}
                  navbarScroll
                >
                  <NavLink to="/article" element={<Article />}>
                    Article
                  </NavLink>
                  <NavLink to="/cases" element={<Cases />}>
                    Cases
                  </NavLink>
                  <NavLink to="/translation" element={<Translation />}>
                    Translation
                  </NavLink>
                  <NavLink to="/toEnglish" element={<Translate />}>
                    En-En
                  </NavLink>
                  <NavLink to="/toGerman" element={<TranslateToGerman />}>De-En</NavLink>
                  <NavLink to="/listed-word" element={<ListedWord />}>
                    Your Vocabulary
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <div className="router-path">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article" element={<Article />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/translation" element={<Translation />} />
              <Route path="/listed-word" element={<ListedWord />} />
              <Route path="/toEnglish" element={<Translate />} />
              <Route path="toGerman" element={<TranslateToGerman />} />
            </Routes>
          </div>
          <button
            id="logout"
            onClick={() => {
              setToken(null);
            }}
          >
            logout
          </button>
        </div>
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
}
