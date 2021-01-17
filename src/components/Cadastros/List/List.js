import React, { useState } from 'react'
import CadastrosCard from 'components/Cadastros/Card/Card';
import UIModal from 'components/UI/Modal/Modal'

const CadastroList = ({ loading, cadastros, error }) => {
    const [cadastroId, setCadastroId] = useState(null)

    if (error) {
        return <div>Algo de errado não está certo!</div>
    }

    if (loading || cadastros === null) {
        return <div>Carregando...</div>
    }

    if (cadastros.length === 0) {
        return <div>Sem resultado.</div>
    }

    return (
        <div>
            {cadastros.map((alunosCadastrados, index) => (
                <CadastrosCard
                    alunosCadastrados={alunosCadastrados}
                    onClickRestricao={() => setCadastroId(alunosCadastrados.id)}
                    key={index}
                />
            ))}
            <UIModal
                isOpen={Boolean(cadastroId)}
                onClickClose={() => setCadastroId(null)}
            >
                <h1>Restrições alimentares</h1>
            </UIModal>
        </div>
    )
}

export default CadastroList;