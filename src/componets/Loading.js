import React, { Component } from 'react'
import spinner from './Spinner-5.gif'

export default class Loading extends Component {
    render() {
        return (
            <div className="text-center">
                <img className='my-4' src={spinner} alt='spinner'></img>
            </div>
        )
    }
}
