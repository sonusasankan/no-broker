import React, { Component } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header'
import PropertyList from './components/PropertyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        div.container
        <PropertyList/>
      </div>
    );
  }
}

export default App;
