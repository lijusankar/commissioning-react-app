import './App.css';
import ReactJson from 'react-json-view'

import {
  BrowserView,
  MobileView,
  IOSView,
  AndroidView
} from "react-device-detect";

const queryString = require('query-string');

function App() {
  return (
    <div>
      <div className="App">
        <h3>Alexa Connected Devices</h3>
        <div className="logo">
          <img src="https://d3ogm7ac91k97u.cloudfront.net/content/dam/alexa/blog/blog_quick-links_954x240.png"
            width="600" alt="logo"></img>
        </div>
      </div>
      <h4>Payload</h4>
      <ReactJson src={JSON.parse(parsePayload())} theme="monokai" />

      <h4>UserAgent</h4>
      <BrowserView>
        <h5> This is rendered only in browser </h5>
      </BrowserView>
      <MobileView>
        <h5> This is rendered only on mobile </h5>
      </MobileView>
      <AndroidView>
        <h5> This is rendered only on ANDROID mobile </h5>
      </AndroidView>
      <IOSView>
        <h5> This is rendered only on IOS mobile </h5>>
      </IOSView>
    </div>
  );
}

function parsePayload() {
  if(window.location.search){
    const base64payload = queryString.parse(window.location.search);
    const payloadString = atob(base64payload?.data);

    console.log(JSON.parse(payloadString));
    return payloadString
  }

  return "N/A";
}

export default App;
