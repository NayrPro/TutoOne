import React from 'react'

function TextError(props) {
    return (
        <span className='error'>
            <br/>{props.children}
        </span>
    )
}

export default TextError
