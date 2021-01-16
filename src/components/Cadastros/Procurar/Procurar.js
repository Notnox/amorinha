import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import CadastroList from '../List/List';
import useApi from '../../utils/useApi'

const CadastrosProcura = () => {

    const [pesquisa, setPesquisa] = useState('')
    const [load, loadInfo] = useApi({
        url: '/Cadastros',
        method: 'get',
        params: {
            _embed: 'ra',
            _order: 'desc',
            _sort: 'id',
            nome_like: pesquisa || undefined,
        },
    })

    useEffect(() => {
        load()
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
            <CadastroList 
                cadastros={loadInfo.data} 
                loading={loadInfo.loadind}
                error={loadInfo.error}
            />
        </div>
    )
}

export default CadastrosProcura;
