import React from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Header, HomeScreen, Sidebar } from "./Import";
function App() {
  return (
    <>
      <Header />
      <div className="app_container ">
        <Sidebar />
        <Container fluid className="app_main ">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
