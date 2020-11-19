import React from 'react'

import './spinner.css'

const spinner = props => (
    <div className={`Loader ${props.form}`}>Loading...</div>
);

export default spinner