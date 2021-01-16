import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import useApi from 'components/utils/useApi'

const initialValue = {
    "nome": "",
    "idade": 0,
    "sexo": "",
    "fotoUrl": ""
}

const CadastroForm = ({ id }) => {
    const [values, setValues] = useState(id ? null : initialValue)
    const history = useHistory()
    const [load] = useApi ({
        url: `/Cadastros/${id}`,
        method: 'get',
        onCompleted: (response) => {
            setValues(response.data)
        }
    })

    const [save, saveInfo] = useApi({
        url: id ? `/Cadastros/${id}` : '/Cadastros',
        method: id ? 'put' : 'post',
        onCompleted: (response) => {
            if (!response.error){
                history.push('/')
            }
        }

    })

    useEffect(() => {
        if (id) {
            load()
        }
    },[id])

    function onChange(event) {
        const { name, value } = event.target

        setValues({ ...values, [name]: value })
    }

    function onSubmit(event) {
        event.preventDefault()
        save({
            data: values
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
                {saveInfo.loadind && <span>Salvando dados...</span>}
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