import React, { useState } from 'react'
import axios from 'axios'

import './listComments.css'
import Comment from '../comment/comment'
import Button from '../button/button'
import Spinner from '../spinner/spinner'
import Modal from '../modal/modal'

const ListComments = props => {

    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)

    const listenComment = async (txt, id) => {
        setLoad(id)
        await axios.get(`/api/comments/listen/${txt.text}`, { responseType: "blob" }).then(res => {
            var blob = new Blob([res.data], { type: "audio/webm" });
            var url = window.URL.createObjectURL(blob);
            window.audio = new Audio();
            window.audio.src = url;
            window.audio.play();
        })
        .catch(err => {
            setError('Houve um erro para processar o texto.')
            setLoad(false)
        })
        setLoad(false)
    }
    
    return (
        <>
        <Modal show={error} modalClosed={() => setError(false)}>
            {error}
        </Modal>
        <ul className='listComments'>
        {props.values.map((txt, id) => (
                <li key={id}>
                <Comment>{txt.text}</Comment>
                <Button clicked={() => listenComment(txt, id+1)}>{load === id+1 ? <Spinner form='form' /> : 'Ouvir'}</Button>
                </li>
        ))}
        </ul>
        </>
    )
}

export default ListComments