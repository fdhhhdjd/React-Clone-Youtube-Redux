import React, { useState } from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Header, HomeScreen, LoginScreen, Sidebar } from "./Import";
const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};
function App() {
  return <h1>oke ne</h1>;
}

export default App;
