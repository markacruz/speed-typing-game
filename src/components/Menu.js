import React, { Component } from 'react';

export default class Menu extends Component {

    state = {
        minChars: null,
        maxChars: null,
        isClicked: false
    }

    handleClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render() {

        let btnColor = this.state.isClicked ? "text-white" : null;

        return (
            <div className='mt-8 py-6 px-[400px]'>
                <div className='flex'>
                    <div className=''>
                        
                    </div>
                    <div className=''>
                        <div className='text-white'>
                            minimum characters
                        </div>

                        <span className='flex gap-x-2 text-gray-400'>
                            <div>
                                <button value="100"
                                className={btnColor}
                                onClick={this.handleClick}>
                                    100
                                </button>
                            </div>
                            
                            <div>
                                <button value="150"
                                className={btnColor}
                                onClick={this.handleClick}>
                                    150
                                </button>
                            </div>

                            <div>
                                <button value="200"
                                className={btnColor}
                                onClick={this.handleClick}>
                                    200
                                </button>
                            </div>

                            <div>
                                <button value="250"
                                className={btnColor}
                                onClick={this.handleClick}>
                                    250
                                </button>
                            </div>
                            
                            <div>
                                <button value="300"
                                className={btnColor}
                                onClick={this.handleClick}>
                                    300
                                </button>
                            </div>
                        </span>

                        <div>
                            <div className='text-white'>
                                maximum characters
                            </div>

                            <span className='flex gap-x-2 text-gray-400'>
                                <div>
                                    <button value="400"
                                    className={btnColor}
                                    onClick={this.handleClick}> 
                                        400
                                    </button>
                                </div>
                                
                                <div>
                                    <button value="450"
                                    className={btnColor}
                                    onClick={this.handleClick}>
                                        450
                                    </button>
                                </div>

                                <div>
                                    <button value="500"
                                    className={btnColor}
                                    onClick={this.handleClick}>
                                        500
                                    </button>
                                </div>

                                <div>
                                    <button value="550"
                                    className={btnColor}
                                    onClick={this.handleClick}>
                                        550
                                    </button>
                                </div>
                                
                                <div>
                                    <button value="600"
                                    className={btnColor}
                                    onClick={this.handleClick}>
                                        600
                                    </button>
                                </div>
                            </span>

                        </div>

                    </div>
                    <div className=''>
                        <button>
                            
                        </button>
                    </div>

                </div>

            </div>
        )
    }
}
