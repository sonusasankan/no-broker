import React, { Component } from "react";

class PropertyList extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch("http://demo8213882.mockable.io/fetchProperties")
      .then(response => response.json())
      .then(resData => {
        this.setState({ 
            properties: resData,
            isLoading: false 
        })
      })
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));   
      
  }

  render() {
    const { isLoading, properties, error } = this.state;
    return (
      <React.Fragment>
        <h1>Properties lists</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
        properties.data.map( (item, index) => {
          return (
            <ul>
              <li>{item.city}</li>
            </ul>
          );
        })
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <h3>Loading...</h3>
      )}
      </React.Fragment>
    );
  }
}

export default PropertyList;
