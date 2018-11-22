import React, { Component } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import PropertyList from "./components/PropertyList";
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';

import 'rc-slider/assets/index.css';
import { ToggleView } from './components/ToggleView/ToggleView';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;


const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      value: [],
      isGrid: true,
      min: 0,
      max: 1350,
    };
  }

  updateRange = (value,) =>{
    this.setState({
      value,
    })
    this.child.current.filterByPropertySize(value);
  } 

  handleClick = () => {
   this.setState({
     isGrid: !this.state.isGrid
   })
  }
  
  handleFilter = (value) => {}

  render() {
    return (
      <div className="App">
        <Header />
        <ToggleView isGrid={this.state.isGrid} onClick={this.handleClick}/>
        <section className="property-listing py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-left">
                <h5 className="my-4">Filters</h5>
                <div className="card">
                  <div className="card-body">
                    <span className="d-flex justify-content-between"><p>Min sqft</p><p>Max sqft</p></span>
                    <Range defaultValue={[350, 1350]} min={this.state.min} max={this.state.max}onChange={this.updateRange}  tipFormatter={value => `${value}sqft`} />
                    <div className="mt-5">
                    <span className="d-flex justify-content-between"><p>Min Rent</p><p>Max Rent</p></span>
                    <Range defaultValue={[5000, 20000]} min={this.state.min} max={this.state.max}   tipFormatter={value => `${value}rent`} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 text-left">
                <h5 className="my-4">Search results in 'Bangalore'</h5>
                <PropertyList ref={this.child} isGrid={this.state.isGrid}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
