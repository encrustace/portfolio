import React from "react";
import "./App.css";
import Box from "./Box";

function App() {
  var items = [];
  for (let index = 0; index < 4; index++) {
    items.push(<Box />);
  }
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <div className="App-row-one">
          {items}
        </div>
        <div className="App-row-two">
          {items}
        </div>
      </div>
      <footer className="App-footer">
        <c>© Encrsut Software</c>
      </footer>
    </div>
  );
}

export default App;
