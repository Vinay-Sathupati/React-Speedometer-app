// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevSpeed => ({speed: prevSpeed.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Speedometer</h1>
          <div className="img-container">
            <img
              className="img-sizing"
              src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
              alt="speedometer"
            />
          </div>
          <h1 className="current-speed">Speed is {speed}mph</h1>
          <p className="limits">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              type="button"
              className="accelerate"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button type="button" className="brake" onClick={this.onBrake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
