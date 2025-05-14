import React from 'react'

const Input = ({ data, handleChange, id }) => {

    let setLabel = ""
    let setPlaceholder = ""
    let setId = ""
    let setName = ""
    let setValue = ""
    let setType = ""
    let setCol = ""

    if (id === 'author') {
        setLabel = "Nome"
        setPlaceholder = "Inserisci il nome"
        setId = "author"
        setName = "author"
        setValue = data.author
        setType = "text"
        setCol = "col-6"
    } else if (id === 'title') {
        setLabel = "Titolo"
        setPlaceholder = "Inserisci il titolo"
        setId = "title"
        setName = "title"
        setValue = data.title
        setType = "text"
        setCol = "col-6"
    } else {
        setCol = "col-12"
    }

    return (
        <>
            <div className={`${setCol} my-2`}>
                {id === 'public' ? (
                    <div className="form-check">
                        <label className="form-label">Pubblica post</label>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="public"
                            name='public'
                            checked={data.public}
                            onChange={handleChange}
                        />
                    </div>
                ) : id === 'body' ? (
                    <>
                        <label className="form-label">Descrizione</label>
                        <textarea
                            name="body"
                            id="body"
                            cols="30"
                            rows="10"
                            className='form-control'
                            placeholder='Inserisci il testo del post'
                            value={data.body}
                            onChange={handleChange}
                        />
                    </>
                ) : (
                    <>
                        <label className="form-label">{setLabel}</label>
                        <input
                            type={setType}
                            name={setName}
                            id={setId}
                            className='form-control'
                            placeholder={setPlaceholder}
                            value={setValue}
                            onChange={handleChange}
                        />
                    </>
                )}

            </div>
        </>
    )
}

export default Input
