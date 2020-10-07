import React, { useState } from "react";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar";
import Feed from "./Feed.js";
import Widget from "./Widget";
import { useStateValue } from "./StateProvider";
import Login from "./Login";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
