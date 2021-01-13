import React from 'react'
import CadastrosCard from 'components/Cadastros/Card/Card';

const CadastroList = ({ loading, cadastros }) => {
    if (loading) {
        return <div>Carregando...</div>
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