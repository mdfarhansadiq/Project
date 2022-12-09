import React from 'react'
import Digit from './Digit/digit'

const CountDown = (props) => {

    return (
        <div className="d-flex">
            {/* <Digit color="palegreen" value={ props.time.min }/>
            <Digit color="skyblue" value={ props.time.sec }/>
            <Digit color="salmon" value={ props.time.mili }/> */}
            <Digit color="palegreen"/>
            <Digit color="skyblue"/>
            <Digit color="salmon"/>
        </div>
    )
}

export default CountDown;