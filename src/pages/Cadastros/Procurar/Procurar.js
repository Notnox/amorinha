import CadastrosCard from 'components/Cadastros/Card/Card';
import React from 'react';


const alunosCadastrados = {
    "id": 1,
    "nome": "Julia Correia dos Santos Neves",
    "idade": 13,
    "sexo": "Feminino",
    "fotoUrl": "https://pbs.twimg.com/profile_images/1273986671487463424/7xmJd9iN_400x400.jpg",
    "ra": [
      {
        "id": 1,
        "alimento": "Peixe",
      },
      {
        "id": 2,
        "alimento": "Couve",
      }
    ]
  }

const PagesCadastrosProcura = () => {
    return <CadastrosCard alunosCadastrados={alunosCadastrados} />
}

export default PagesCadastrosProcura;
