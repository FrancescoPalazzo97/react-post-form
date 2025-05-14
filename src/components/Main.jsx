import React from 'react'

const Main = ({ data, handleChange, handleSubmit }) => {
    return (
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                    onChange={handleChange}
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
    )
}

export default Main
