import React from 'react'
import { useParams } from 'react-router-dom'

const PagesCadastrosForm = () => {
const { id } = useParams();

    return (
        <div>
            {id && <div>id: {id}</div>}
        </div>
    )
}

export default PagesCadastrosForm