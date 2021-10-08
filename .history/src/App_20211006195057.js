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
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app__main ">
          {children}
          {/* <HomeScreen /> */}
        </Container>
      </div>
    </>
  );
};
function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/auth">
          <LoginScreen />
        </Route>
        <Route path="/search">
          <h1>Search React</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
