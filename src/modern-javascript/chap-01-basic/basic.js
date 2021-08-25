import React from 'react'

var man = {} // es5


const Basic = () => {
    const letSample = () => {
        let tom = 'Tom' // es6 에서 variable
        const james = 'James' // es6 에서 constant
    }
    const dynamicType = () =>{
        let userId = 12
        console.log(`USER ID is ${userId}`)
        userId = 'kim'
        console.log(`USER ID is ${userId}`)
    }

    const jsonSample = () => {

    }


    return (<>
    <button onClick={dynamicType}>DynamicType</button><br/>
    <button onClick={jsonSample}>JSON</button>
    </>)
}

export default Basic