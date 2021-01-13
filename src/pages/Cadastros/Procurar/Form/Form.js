import CadastroForm from 'components/Cadastros/Form/Form';
import UIContainer from 'components/UI/Container/Container';
import React from 'react'
import { useParams } from 'react-router-dom'

const PagesCadastrosForm = () => {

    const { id } = useParams();

    return (
        <UIContainer>
            <CadastroForm id={id ? Number.parseInt(id, 10) : null}/>
        </UIContainer>
    )
}

export default PagesCadastrosForm