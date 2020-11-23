import React from 'react';
import '../styles/index.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';


import { Pre_Inicio } from '../components/screenPrincipal/Pre_Inicio';
import { DashboardRoutes } from '../routers/DashboardRoutes';



export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/pre_inicio" component={ Pre_Inicio } />
                    <Route path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}
