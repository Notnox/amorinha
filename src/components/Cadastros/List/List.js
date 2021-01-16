import React from 'react'
import CadastrosCard from 'components/Cadastros/Card/Card';

const CadastroList = ({ loading, cadastros, error }) => {

    if  (error) {
        return <div>Algo de errado não está certo!</div>
    }

    if (loading || cadastros === null) {
        return <div>Carregando...</div>
    }

    if  (cadastros.length === 0) {
        return <div>Sem resultado.</div>
    }

    return (
        <div>
            {cadastros.map((alunosCadastrados, index) => (
                <CadastrosCard 
                    alunosCadastrados={alunosCadastrados} 
                    key={index}
                />
            ))}
        </div>
    )
}

export default CadastroList;