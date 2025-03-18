import React from "react";
import "./styles/style.css";
import DomainList from "./components/DomainList";

function App() {
  return (
    <div className="app-container">
      {/* <h1>Domain & Hosting Services</h1> */}
      <DomainList />
    </div>
  );
}

export default App;
