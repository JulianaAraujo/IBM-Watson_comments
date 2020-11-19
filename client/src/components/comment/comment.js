import React from 'react'

import './comment.css'

const comment = props => (
    <p className='comment'>
        {props.children}
    </p>
)

export default comment