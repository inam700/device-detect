import React, { Component } from "react";

class GetLocation extends Component {
  componentDidMount() {
    if ("geolocation" in navigator) {
      function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(longitude, latitude);
      }
      function error() {
        console.log("Unable to retrieve your location");
      }
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Not Available");
    }
  }
  render() {
    return (
      <div>
        <h1>Geo Location</h1>
      </div>
    );
  }
}
export default GetLocation;
