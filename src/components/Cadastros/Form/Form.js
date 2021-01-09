import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialValue = {
    "nome": "",
    "idade": 0,
    "sexo": "",
    "fotoUrl": ""
}

const CadastroForm = () => {
    const [values, setValues] = useState(initialValue)
    const history = useHistory()

    function onChange(event) {
        const { name, value } = event.target

        setValues({ ...values, [name]: value })
    }

    function onSubmit(event) {
        event.preventDefault()

        axios.post('http://localhost:5000/Cadastros', values)
            .then((response) => {
                history.push('/')
            })
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <h2>Amorinha</h2>

            <form onSubmit={onSubmit}>
                <input 
                    type='text'
                    placeholder='Nome'
                    name='nome'
                    onChange={onChange}
                />

                <input 
                    type='number'
                    placeholder='Idade'
                    name='idade'
                    onChange={onChange}
                />

                <input 
                    type='text'
                    placeholder='Sexo'
                    name='sexo'
                    onChange={onChange}
                />

                <input 
                    type='text'
                    placeholder='Foto URL'
                    name='fotoUrl'
                    onChange={onChange}
                />
                
                <button type='submit'>Salvar</button>
            </form>
        </div>
    )
}

export default CadastroForm