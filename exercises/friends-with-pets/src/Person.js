import React from 'react'
import Proptypes from 'prop-types'
function Person(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
        </div>
    )
}

export default Person