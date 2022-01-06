import React, { Component } from 'react';
import Logo from '../type.png'

export default class Menu extends Component {

    state = {

    }

    render() {
        return (
            <div className='mt-8 py-6 px-[400px]'>
                <div className='flex'>
                    <div className=''>
                        <img className='w-[100px]' 
                        src={Logo} />
                    </div>
                    <div className=''>
                        <div>
                            Min. words:
                        </div>

                        <span className='flex gap-x-2'>
                            <div>
                                <button>
                                    100
                                </button>
                            </div>
                            
                            <div>
                                <button>
                                    150
                                </button>
                            </div>

                            <div>
                                <button>
                                    200
                                </button>
                            </div>

                            <div>
                                <button>
                                    250
                                </button>
                            </div>
                            
                            <div>
                                <button>
                                    300
                                </button>
                            </div>

                        </span>
                        
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
