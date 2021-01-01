import React from 'react'
import CadastrosCard from './components/Cadastros/Card/Card'

import './app.css'
function App() {

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

  return (
    <div className='corpo'>
      <CadastrosCard alunosCadastrados={alunosCadastrados} />
    </div>
  );
}

export default App;
