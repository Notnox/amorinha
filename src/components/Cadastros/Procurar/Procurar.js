import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import CadastroList from '../List/List';

const CadastrosProcura = () => {

    const [cadastros, setCadastros] = useState([])
    const [pesquisa, setPesquisa] = useState('')

    useEffect(() => {
        const params = {}
        if (pesquisa) {
            params.nome_like = pesquisa
        }
        axios.get('http://localhost:5000/Cadastros?_embed=ra', { params })
            .then((response) => {
                setCadastros(response.data)
            })
    }, [pesquisa])


    return (
        <div>
            <header>
                <h1>Amorinha School</h1>
                <Link to='/create'>Cadastrar</Link>
            </header>
            <input
                type='search'
                placeholder='Buscar'
                value={pesquisa}
                onChange={(event) => setPesquisa(event.target.value)}
            />
            <CadastroList cadastros={cadastros} loading={!cadastros.length}/>
        </div>
    )
}

export default CadastrosProcura;
