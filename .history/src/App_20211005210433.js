import React, { useState } from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Header, HomeScreen, Sidebar } from "./Import";
function App() {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar(!sidebar);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container ">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app_main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
