import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css';

import BoxComment from './components/boxComment/boxComment'
import ListComments from './components/listComments/listComments'
import Spinner from './components/spinner/spinner'
import Modal from './components/modal/modal'

function App() {
  const [valor, setValor] = useState('')
  const [textos, setTextos] = useState([])
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get('/api/comments').then(result => {
      if (result.status === 200) {
        setTextos(result.data)
      }
    })
    .catch(err => {
      setError('Erro para carregar os dados.')
      setLoad(false)
    })
  }, [])

  const submitHandler = (event) => {
    event.preventDefault()
    setLoad(true)
      if (valor.length === 0) {
        setError('Favor inserir um texto.')
        setLoad(false)
        return;
      }
      axios.post('/api/comments/add', { text: valor }).then(response => {
        setValor('')
        const updateTxt = [...textos, {id: '', text: valor}]
        setTextos(updateTxt)
        setLoad(false)
      })
      .catch(err => {
        setError('Erro para gravar no banco de dados.')
        setLoad(false)
      })
    
  }

  let box = <BoxComment 
            valor={valor}
            changed={event => setValor(event.target.value)}
            clicked={submitHandler} />
  if (load) {
    box = <Spinner />
  }

  return (
    <div className="App">
      <Modal show={error} modalClosed={() => setError(false)}>
        {error}
      </Modal>
      <div className="boxComment">
        <div className="boxComment__item">
          {box}
        </div>
      </div>
      <div className="comments">
        <ListComments values={textos} />
      </div>
    </div>
  );
}

export default App;
