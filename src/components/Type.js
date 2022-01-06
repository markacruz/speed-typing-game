import React from 'react';
import axios from 'axios';
import Modal from './Modal';

export default class Type extends React.Component {
    
    state = {
        text: [],
        characters: [],
        words: [],
        isFinish: false,
        isStart: false,
    }

    handleChange = (event) => {
    
        let quoteDisplayElement = document.getElementById('quote');
        let quoteInputElement = document.getElementById('input');

        const arrayQuote = quoteDisplayElement.querySelectorAll('span')
        const arrayValue = quoteInputElement.value.split("")

        if (arrayValue.length === 1) this.props.hasStartedTyping(true);

        arrayQuote.forEach((characterSpan, index) => {
            const character = arrayValue[index]

            if (character === null) { 
                characterSpan.classList.remove('incorrect') 
                characterSpan.classList.remove('correct') 
            } else if (character === characterSpan.innerText) {
                characterSpan.classList.add('correct')
                characterSpan.classList.remove('incorrect')
            } else {
                characterSpan.classList.add('incorrect')
                characterSpan.classList.remove('correct')
            }
        })

        if (arrayQuote.length === arrayValue.length && arrayQuote[arrayQuote.length-1].innerText === arrayValue[arrayValue.length-1]) {
            this.props.isFinish(true)
            this.setState({ isFinish: true  })
        }

        this.setState({
            [event.target.name]: event.target.value
        })   
    }

    handleStart = () => {
        this.setState({
            isStart: true
        })

        const URL = "https://api.quotable.io/random?minLength=100&maxLength=140";
        axios.get(URL)
        .then(response => {
            let quoteDisplayElement = document.getElementById('quote');
            let quoteInputElement = document.getElementById('input')

            this.setState({ characters: response.data.content.split("") })
            this.setState({ words: response.data.content.split(" ") })

            quoteDisplayElement.innerText = ""
            response.data.content.split("").forEach(character => {
                const characterSpan = document.createElement('span');
                characterSpan.innerText = character;
                quoteDisplayElement.appendChild(characterSpan)
            })
            quoteInputElement.value = null
            this.props.isStart(true);
        }).catch (err => console.log(err))
    }
    
    render() {
        return (
            <div className='flex justify-center items-center'>

                {this.state.isFinish ? <Modal time={this.props.time} 
                characters={this.state.characters} 
                words={this.state.words} 
                wpm={Math.floor((this.state.characters.length / 5) / (this.props.time / 60))}/> : null}

                <div className='w-[480px] h-[300px] shadow-2xl'>
                    <div className='bg-[#2C2F33] rounded-md px-6 py-4'>

                    {this.state.isStart ?
                        <div>
                            <div className='text-white font-extrabold tracking-widest mb-2' 
                            id="quote"
                            >
                            </div>

                            <div className=''>
                                <textarea className='resize-none bg-[#23272A] font-semibold text-gray-300 outline-none w-full h-[200px] border-[1px] 
                                tracking-widest rounded-md px-3 py-2'
                                name='text'
                                value={this.state.text}
                                onChange={this.handleChange}
                                id="input"
                                />
                            </div>
                        </div>
                        :
                        <div className='h-[300px] flex justify-center items-center'>
                            <div className='flex-none'>
                                <button className='text-2xl text-white font-semibold text-opacity-50 animate-pulse'
                                onClick={this.handleStart}>
                                    Click to start ➬
                                </button>
                            </div>
                        </div>
                    }
                    </div> 
                </div>
            </div>
            
        )
    }
}