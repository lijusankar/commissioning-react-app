import './App.css';
import JSONTree from 'react-json-tree';
import { withUserAgent } from "react-useragent";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  IOSView,
  AndroidView
} from "react-device-detect";


const queryString = require('query-string');
const theme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633',
};

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
      <JSONTree data={parsePayload()} theme={theme} />

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
  const parsed = queryString.parse(window.location.search);
  return atob(parsed?.data);
}

export default App;
