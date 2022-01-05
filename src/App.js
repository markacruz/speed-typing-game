import React from 'react';
import Timer from './components/Timer';
import Type from './components/Type';

export default class App extends React.Component {

  state = {
    isStart: false,
    isFinish: false,
    time: 0,
  }
  
  handleStart = (isStartParams) => {
    this.setState({
      isStart: isStartParams
    })
  }

  handleFinish = (isFinishParams) => {
    this.setState({
      isFinish: isFinishParams
    })
  }

  handleTime = (timeParams) => {
    this.setState({
      time: timeParams
    })
  }

  render() {
    return (
      <div>
        <Timer isStart={this.state.isStart} isFinish={this.state.isFinish} time={this.handleTime} />
        <Type isStart={this.handleStart} isFinish={this.handleFinish} time={this.state.time} />
      </div>
    );
  }
}
