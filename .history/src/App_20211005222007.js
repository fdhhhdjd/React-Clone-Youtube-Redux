import React, { useState } from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Header, HomeScreen, LoginScreen, Sidebar } from "./Import";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          {/* {children} */}
          < HomeScreen/
        </Container>
      </div>
    </>
  );
};
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
      </Switch>
    </>
  );
}

export default App;
