import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="app_container">
        <Sidebar />
      </div>
    </>
  );
}

export default App;
