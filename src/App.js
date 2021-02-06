import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactBootstrapRange from "./components/mui/ReactBootstrapRange";
import HomePage from "./components/HomePage";
import GetLocation from "./components/geolocation/GetLocation";
import DeviceDetect from "./components/deviceDetect/DeviceDetect";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/mui-range-slider" component={ReactBootstrapRange} />
          <Route path="/geo-location" component={GetLocation} />
          <Route path="/device-detect" component={DeviceDetect} />
        </Switch>
      </div>
    );
  }
}
export default App;
