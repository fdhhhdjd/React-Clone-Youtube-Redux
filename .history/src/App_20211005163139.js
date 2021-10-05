import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/sidebar/Sidebar";
import { Container } from 'react-bootstrap'
function App() {
  return (
    <>
      <Header />
      <div className="app_container">
        <Sidebar />
        <Container fluid className="app_main">
          <H
        </Container>
      </div>
    </>
  );
}

export default App;
