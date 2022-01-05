import React from 'react';

let startTime;

export default class Timer extends React.Component {

    state = {
        time: 0
    }

    componentDidMount() {
        this.timerFunction();
    }

    timerFunction() {
        startTime = new Date()
        setInterval(() => {
            this.setState({ time: this.getTimerTime() })
            this.props.time(this.state.time)
        }, 1000)
    }

    getTimerTime() {
        return Math.floor((new Date() - startTime) / 1000)
    }

    render() {
        return (
            <div className='flex justify-center items-center'>
                <div className='font-extrabold text-[100px] text-[#99AAB5]'>
                    {this.state.time}
                </div>
            </div>
        )
    }
}