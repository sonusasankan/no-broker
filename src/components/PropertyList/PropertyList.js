import React, { Component } from "react";
import Slider from "react-slick";
import PropTypes from 'prop-types';

import "./PropertyList.css";
import furnished from "../../assets/bed.svg";

class PropertyList extends Component {
  constructor() {
    super();
    this.state = {
      properties: { 
        data: []
      },
      isLoading: true,
      error: null,
    };
  }

filterByPropertySize = (value) => {
  let sizes = []
  this.state.properties.data.map(item => {
    return(
      sizes.push(item.propertySize)
    )
  })
  
   const results= this.state.properties.data.filter( (item) => { return item.propertySize > value[0]});
   this.setState({
      properties: {
        data: results
      }
   })
}

  componentDidMount() {
    fetch("http://demo8213882.mockable.io/fetchProperties")
      .then(response => response.json())
      .then(resData => {
        this.setState({
          properties: {
            data: resData.data 
          },
          isLoading: false
        });
      })
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));

    window.addEventListener("scroll", this.onScroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      this.setState(prevState => ({
        properties: {
          data: [...prevState.properties.data, ...prevState.properties.data]
        } // Data returned from the fetch operation
      }));
    }
  };

  render(props) {

    const isGrid = this.props.isGrid;
    const { isLoading, properties, error} = this.state;
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <React.Fragment>
        {isGrid === false ? <Slider {...settings}>
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            properties.data.map((item, index) => {
              let length = item.photos.length;
              return (
                  <div className="col-md-12 nb-card">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={
                        item.photos.length >= 1
                          ? "https://images.nobroker.in/images/" +
                            item.id +
                            "/" +
                            item.photos[0].imagesMap.thumbnail
                          : "https://via.placeholder.com/200X150"
                      }
                      alt="Card image cap"
                    />
                    <div className="card-body nb_property-name">
                      <h6 className="card-title">{item.title}</h6>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <span>
                          <strong> &#x20b9; {item.rent} Rent</strong>
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span>
                          <strong>{item.propertySize} sqft</strong>
                        </span>
                      </li>
                      <li className="list-group-item">
                        <img className="furnished-icon" src={furnished} />
                        {item.furnishingDesc} Furnished
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })
          ) : (
            // If there is a delay in data, let's let the user know it's loading
            <div className="col-md-8">
              <p>Loading...</p>
            </div>
          )}
        </Slider> : <div className="row">
        {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
            properties.data.map((item, index) => {
              let length = item.photos.length;
              return (
                  <div key={index * 1.5} className="col-md-4 nb-card">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={
                        item.photos.length >= 1
                          ? "https://images.nobroker.in/images/" +
                            item.id +
                            "/" +
                            item.photos[0].imagesMap.thumbnail
                          : "https://via.placeholder.com/200X150"
                      }
                      alt="Card image cap"
                    />
                    <div className="card-body nb_property-name">
                      <h6 className="card-title">{item.title}</h6>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <span>
                          <strong> &#x20b9; {item.rent} Rent</strong>
                        </span>
                      </li>
                      <li className="list-group-item">
                        <span>
                          <strong>{item.propertySize} sqft</strong>
                        </span>
                      </li>
                      <li className="list-group-item">
                        <img className="furnished-icon" src={furnished} />
                        {item.furnishingDesc} Furnished
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })
          ) : (
            // If there is a delay in data, let's let the user know it's loading
            <div className="col-md-8">
              <p>Loading...</p>
            </div>
          )}
        </div>}
      </React.Fragment>
    );
  }
}

PropertyList.propTypes = {
  isGrid: PropTypes.bool.isRequired,
};

export default PropertyList;
