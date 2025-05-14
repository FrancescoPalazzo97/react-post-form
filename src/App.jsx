import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'

const postEndpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

function App() {

  const [data, setData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  const handleSubmit = e => {
    e.preventDefault()
    const { author, title, body } = data

    if (author && title && body) {
      axios.post(postEndpoint, data)
        .then(res => {
          console.log(res.data)
          alert("Post inviato con successo")
          setData({
            author: "",
            title: "",
            body: "",
            public: false
          })
        })
        .catch(err => {
          console.error(err)
          alert("Errore durante l'invio del post")
        })
    } else {
      alert("Compila tutti i campi")
    }
  }

  return (
    <>
      <div className='container'>
        <Header />
        <main className="row">
          <div className="col-12">
            <form action="" className='border rounded bg-light p-4'>
              <div className="row g3">
                {/* Author */}
                <div className="col-6">
                  <label className="form-label">Nome</label>
                  <input
                    type="text"
                    name='author'
                    id='author'
                    className='form-control'
                    placeholder='Inserisci il nome'
                    value={data.author}
                    onChange={(e) => setData({ ...data, author: e.target.value })}
                  />
                </div>
                {/* Title */}
                <div className="col-6">
                  <label className="form-label">Titolo</label>
                  <input
                    type="text"
                    name='title'
                    id='title'
                    className='form-control'
                    placeholder='Inserisci il titolo'
                    value={data.title}
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                  />
                </div>
                {/* Body description */}
                <div className="col-12 my-3">
                  <label className="form-label">Descrizione</label>
                  <textarea
                    name="body"
                    id="body"
                    cols="30"
                    rows="10"
                    className='form-control'
                    placeholder='Inserisci il testo del post'
                    value={data.body}
                    onChange={(e) => setData({ ...data, body: e.target.value })}
                  />
                </div>
                {/* Checkbox */}
                <div className="col-12 mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="public"
                      name='public'
                      checked={data.public}
                      onChange={(e) => setData({ ...data, public: e.target.checked })}
                    />
                    <label htmlFor="public" className="form-check-labelq">Pubblica post</label>
                  </div>
                </div>
                {/* Send Button */}
                <div className="col-12">
                  <button
                    type='submit'
                    className='btn btn-primary'
                    onClick={e => handleSubmit(e)}
                  >Invia post</button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
