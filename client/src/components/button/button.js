import React from 'react'

import './button.css'

const button = props => (
    <button
        className='button'
        type={props.type}
        disabled={props.disabled}
        onClick={props.clicked}>
        {props.children}
    </button>
)

export default button