import React, { useState } from 'react'

const initialValue = {
    "nome": "",
    "idade": 0,
    "sexo": "",
    "fotoUrl": ""
}

const CadastroForm = () => {
    const [value, setValue] = useState(initialValue)

    function onChange(event) {
        const { name, value } = event.target
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <h2>Amorinha</h2>

            <form>
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