import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import PagesCadastrosForm from './Cadastros/Procurar/Form/Form';
import PagesCadastrosProcura from './Cadastros/Procurar/Procurar';

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/create" component={PagesCadastrosForm} />
                <Route path="/edit/:id" component={PagesCadastrosForm} />
                <Route path="/" component={PagesCadastrosProcura} />
            </Switch>
        </Router>
    )
}

export default Root;