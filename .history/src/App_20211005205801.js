import React, { useState } from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Header, HomeScreen, Sidebar } from "./Import";
function App() {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSideBar = () => {
    toggleSidebar(!sidebar);
  };

  return (
    <>
      <Header />
      <div className="app_container ">
        <Sidebar />
        <Container fluid className="app_main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
