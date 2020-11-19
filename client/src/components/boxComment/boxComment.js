import React from 'react'

import './boxComment.css'
import Button from '../button/button'

const boxComment = props => (
    <div className='boxCommentContainer'>
        <h3>Comentário</h3>
        <form onSubmit={props.onSubmit}>
            <textarea value={props.valor} onChange={props.changed}></textarea>
            <Button type='submit' clicked={props.clicked} disabled={props.valor.length === 0 ? true : false }>Cadastrar</Button>
        </form>
    </div>
)

export default boxComment