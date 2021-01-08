import CadastroForm from 'components/Cadastros/Form/Form';
import UIContainer from 'components/UI/Container/Container';
import React from 'react'
//import { useParams } from 'react-router-dom'

const PagesCadastrosForm = () => {
//const { id } = useParams();

    return (
        <UIContainer>
            <CadastroForm />
        </UIContainer>
    )
}

export default PagesCadastrosForm