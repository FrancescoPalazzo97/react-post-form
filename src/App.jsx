import { useState, useEffect } from 'react'

const postEndpoint = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

function App() {

  const [data, setData] = useState({
    name: "",
    title: "",
    body: "",
    public: false
  })

  return (
    <>
      <div className='container'>
        <header className="row py-5">
          <div className="col-12 text-center text-uppercase">
            <h2>React Post Form</h2>
          </div>
        </header>
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
                    value={data.name}
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
                    />
                    <label htmlFor="public" className="form-check-labelq">Pubblica post</label>
                  </div>
                </div>
                {/* Send Button */}
                <div className="col-12">
                  <button type='submit' className='btn btn-primary'>Invia post</button>
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
