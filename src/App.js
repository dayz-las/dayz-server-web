import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import logo from './media/dayz.png'

const particleOpt = {
  "particles": {
    "shape": {
      "type": 'images',
      "images": [
        {src: 'https://images.vexels.com/media/users/3/153442/isolated/preview/589f5761da059d18a124be9753da2d5d-zombie-walking-silhouette-by-vexels.png', height: 200, width: 200},
        {src: 'https://i.pinimg.com/originals/6c/53/56/6c5356f7dcf42a4b1716b2ba5fdd9aef.png', height: 200, width: 200}
      ]
    },
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 1500
      }
    },
    "line_linked": {
      "enable": false,
    },
    "move": {
      "direction": "center",
      "speed": 1
    },
    "size": {
      "value": 30
    },
    "opacity": {
      "anim": {
        "enable": true,
        "speed": 5,
        "opacity_min": 0.5
      }
    }
  },
  "retina_detect": true
}

class App extends Component {
  render() {
    return (
      <div className="body-particles">
        <div className="test">
          <img src={logo}></img>
        </div>
        <Particles className="particles-js"
          params={particleOpt}
        />

      </div>
    );
  }
}

export default App;
