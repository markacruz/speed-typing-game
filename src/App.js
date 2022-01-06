import React from 'react';
import Timer from './components/Timer';
import Type from './components/Type';
import Menu from './components/Menu';

export default class App extends React.Component {

  state = {
    isStart: false,
    isFinish: false,
    time: null,
    hasStartedTyping: false
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

  handleStartedTyping = (startedTypingParams) => {
    this.setState({
      hasStartedTyping: startedTypingParams
    })
  }

  render() {
    return (
      <div>

        {/* <Menu /> */}

        <div className='flex justify-center items-center h-[750px]'>
          <div className='flex-none'>
            {this.state.isStart && !this.state.isFinish ? <Timer isStart={this.state.isStart} isFinish={this.state.isFinish} time={this.handleTime} 
            hasStartedTyping={this.state.hasStartedTyping} />
              : 
          <div className='flex justify-center items-center'>
            <div className='font-extrabold text-[100px] text-[#99AAB5] h-[150px]'>
                {this.state.time}
            </div>
          </div>
          }
            <Type hasStartedTyping={this.handleStartedTyping} isStart={this.handleStart} isFinish={this.handleFinish} time={this.state.time} />
          </div>
        </div>
      </div>
      
    );
  }
}
