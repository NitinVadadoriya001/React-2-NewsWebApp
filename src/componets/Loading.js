import React from 'react'
import spinner from './Spinner-5.gif'

const Loading = ()=> {

        return (
            <div className="text-center">
                <img className='my-4' src={spinner} alt='spinner'></img>
            </div>
        )
 
}
export default Loading;