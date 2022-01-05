import React from 'react';

export default class Modal extends React.Component {
    render() {
        return (
            <div className='fixed bg-[#F6F6F6] px-[200px] py-[200px] rounded-md shadow-xl'>
                {this.props.time}
            </div>
        )
    }
}