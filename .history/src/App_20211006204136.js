import React, { useState } from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import {
  Header,
  HomeScreen,
  LoginScreen,
  SearchScreen,
  Sidebar,
} from "./Import";
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
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/auth">
          <LoginScreen />
        </Route>
        <Route path="/search/:query">
          <Layout>
            <SearchScreen />
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
