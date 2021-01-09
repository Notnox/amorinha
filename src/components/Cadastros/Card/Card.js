import React from 'react';
import { Link } from 'react-router-dom'
import './card.css'

const CadastrosCard = ({ alunosCadastrados }) => (
    <div className='cadastroCard--corpo'>
        <img src={alunosCadastrados.fotoUrl} alt={alunosCadastrados.nome} className='cadastroCard--img' />
        <div className='cadastroCard--info'>
            <h1>{alunosCadastrados.nome}</h1>
            <section>
                <span>{alunosCadastrados.idade} {alunosCadastrados.idade > 1 ? 'anos' : 'ano'}</span>
                <span>{alunosCadastrados.sexo}</span>
            </section>
            <footer className='cadastroCard--ra'>
                <div>
                    {alunosCadastrados.ra.length} {alunosCadastrados.ra.length > 1 ? 'Alimentos' : 'Alimento'} com restição
                </div>
                {alunosCadastrados.ra.length > 0 && (
                    <div>
                        ({alunosCadastrados.ra.length > 1 ? alunosCadastrados.ra[0].alimento + '...' : alunosCadastrados.ra[0].alimento})
                    </div>
                )}
            </footer>
            <Link to={`/edit/${alunosCadastrados.id}`}>Editar</Link>
        </div>
    </div>
)

export default CadastrosCard;