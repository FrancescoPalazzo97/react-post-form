import React from 'react'
import Input from './Input'

const Main = ({ data, handleChange, handleSubmit }) => {
    return (
        <main className="row">
            <div className="col-12">
                <form action="" className='border rounded bg-light p-4' onSubmit={e => handleSubmit(e)}>
                    <div className="row g3">
                        {/* Author */}
                        <Input
                            data={data}
                            handleChange={handleChange}
                            id='author'
                        />
                        {/* Title */}
                        <Input
                            data={data}
                            handleChange={handleChange}
                            id='title'
                        />
                        {/* Body description */}
                        <Input
                            data={data}
                            handleChange={handleChange}
                            id='body'
                        />
                        {/* Checkbox */}
                        <Input
                            data={data}
                            handleChange={handleChange}
                            id='public'
                        />
                        {/* Send Button */}
                        <div className="col-12">
                            <button
                                type='submit'
                                className='btn btn-primary'
                            // onClick={e => handleSubmit(e)}
                            >Invia post</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Main
