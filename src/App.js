import React, { Component } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import PropertyList from './components/PropertyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PropertyList/>
      </div>
    );
  }
}

export default App;
