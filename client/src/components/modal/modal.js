import React from 'react'

import './modal.css'
import Backdrop from '../backdrop/backdrop'

const modal = props => {

    return (
        <>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className='modal'
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </>
    )
}

export default React.memo(modal,
    (prevProps, nextProps) => nextProps.show === prevProps.show && nextProps.children === prevProps.children);