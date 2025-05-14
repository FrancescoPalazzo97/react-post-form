import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import Main from './components/Main'

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

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value
    })
  }

  return (
    <>
      <div className='container'>
        <Header />
        <Main
          data={data}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  )
}

export default App
