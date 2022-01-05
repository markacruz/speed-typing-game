import React from 'react';

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000
}

const OVERLAY_STYLE = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default class Modal extends React.Component {   

    state = {
        isPlayAgain: false
    }

    handlePlayAgain = () => {
        this.setState({
            isPlayAgain: true
        })
    }

    render() {
        return (
            <div style={OVERLAY_STYLE}>
                <div className='bg-[#F6F6F6] w-[480px] h-[250px] px-6 py-4 rounded-md shadow-xl'
                style={MODAL_STYLE}>
                    <div className='text-4xl font-bold mb-2'>
                        Results
                    </div>

                    <div className='flex gap-x-2 text-[50px] font-semibold justify-center mb-5'>
                        <div className='pr-2'>
                            <span className='text-[#e2b714]'>{this.props.time}</span> <span className='italic'>sec</span>
                        </div>

                        <div className='border-l-[1px] pl-3'>
                            <span className='text-[#e2b714]'>{this.props.wpm}</span> <span className='italic'>WPM</span>
                        </div>
                    </div>

                    <div className='text-center'>
                        <button className='text-xl text-gray-600 bg-[#e2b714] px-2 py-1 w-[200px] h-[75px] rounded-md font-bold'
                        onClick={this.handlePlayAgain}>
                            Play again?
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}