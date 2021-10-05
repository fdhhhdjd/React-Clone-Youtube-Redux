import React, { useState } from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Header, HomeScreen, LoginScreen, Sidebar } from "./Import";
const layout = () => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar(!sidebar);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app__main ">
          <HomeScreen />
        </Container>
      </div>
      <LoginScreen />
    </>
  );
};
function App() {}

export default App;
