import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialValue = {
    "nome": "",
    "idade": 0,
    "sexo": "",
    "fotoUrl": ""
}

const CadastroForm = ({ id }) => {
    const [values, setValues] = useState(id ? null : initialValue)
    const history = useHistory()

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/Cadastros/${id}`)
                .then((response) => {
                    setValues(response.data)
                })
        }
    },[])

    function onChange(event) {
        const { name, value } = event.target

        setValues({ ...values, [name]: value })
    }

    function onSubmit(event) {
        event.preventDefault()

        const method = id ? 'put' : 'post'

        const url = id 
            ? `http://localhost:5000/Cadastros/${id}`
            : 'http://localhost:5000/Cadastros'

        axios[method](url, values)
            .then((response) => {
                history.push('/')
            })
    }

    if (!values) {
        return <div>Carregando...</div>
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
                    value={values.nome}
                />

                <input 
                    type='number'
                    placeholder='Idade'
                    name='idade'
                    onChange={onChange}
                    value={values.idade}
                />

                <input 
                    type='text'
                    placeholder='Sexo'
                    name='sexo'
                    onChange={onChange}
                    value={values.sexo}
                />

                <input 
                    type='text'
                    placeholder='Foto URL'
                    name='fotoUrl'
                    onChange={onChange}
                    value={values.fotoUrl}
                />
                
                <button type='submit'>Salvar</button>
            </form>
        </div>
    )
}

export default CadastroForm