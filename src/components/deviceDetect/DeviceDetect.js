import React, { Component } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
class DeviceDetect extends Component {
  render() {
    return (
      <div>
        <BrowserView>
          <h1> This is rendered only in browser </h1>
        </BrowserView>
        <MobileView>
          <h1> This is rendered only on mobile </h1>
        </MobileView>
      </div>
    );
  }
}
export default DeviceDetect;
