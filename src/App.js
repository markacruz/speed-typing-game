import React from 'react';
import Timer from './components/Timer';
import Type from './components/Type';
import Menu from './components/Menu';


export default class App extends React.Component {

  state = {
    isStart: false,
    isFinish: false,
    time: null,
  }
  
  handleStart = (isStartParams) => {
    this.setState({
      isStart: isStartParams
    })
    console.log(this.state.isStart)
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

        <Menu />

        <div className='flex justify-center items-center h-[750px]'>
          <div className='flex-none'>
            {this.state.isStart && !this.state.isFinish ? <Timer isStart={this.state.isStart} isFinish={this.state.isFinish} time={this.handleTime} />
              : 
          <div className='flex justify-center items-center'>
            <div className='font-extrabold text-[100px] text-[#99AAB5] h-[150px]'>
                {this.state.time}
            </div>
          </div>
          }
            <Type isStart={this.handleStart} isFinish={this.handleFinish} time={this.state.time} />
          </div>
        </div>
      </div>
      
    );
  }
}
