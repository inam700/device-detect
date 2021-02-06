import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";
import "./ReactBootstrapRange.css";
class ReactBootstrapRange extends Component {
  state = {
    rangeValue: 80,
  };
  handleValueChange = ( e) => {
    this.setState({
      rangeValue: e.target.value,
    });
    console.log(this.state.rangeValue);
  };
  render() {
    return (
      <div className="mt-lg-5">
        <Slider
          defaultValue={80}
          valueLabelDisplay="on"
          onChange={this.handleValueChange}
        />
      </div>
    );
  }
}
export default ReactBootstrapRange;
