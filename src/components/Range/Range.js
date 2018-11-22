import React, { Component } from "react";

class Range extends React.Component {
    constructor(props) {
      super(props);
      this.updateRange = this.updateRange.bind(this);
    }
    
    updateRange(e) {
      this.props.updateRange(e.target.value);
    }
    
    render() {
      const { range } = this.props;
      return (
        <div>
          <input name="range" id="range" multiple type="range"
            value={range}
            min="0"
            max="2000"
            step="1"
            onChange={this.updateRange}
          />
          <span id="output">{range}</span>
        </div>
      )
    }
  }

  export default Range;