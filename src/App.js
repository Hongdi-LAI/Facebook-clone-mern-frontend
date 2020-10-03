import React from "react";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar";
import Feed from "./Feed.js";
import Widget from "./Widget";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
        {/* feed */}
        <Feed />
        {/* widgets */}
        <Widget />
      </div>
    </div>
  );
}

export default App;
