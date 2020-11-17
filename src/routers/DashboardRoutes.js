import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { Pre_Inicio } from '../components/screenPrincipal/Pre_Inicio';
import { Inicio } from '../components/screenPrincipal/Inicio';
import { Developers } from '../components/developers/Developers';
import { Footer } from '../components/ui/Footer';

import { Cafeteria } from '../components/areas/Cafeteria';
import { Administracion } from '../components/areas/Administracion';
import { Ala_Medica } from '../components/areas/Ala_Medica';
import { Almacen } from '../components/areas/Almacen';
import { Armeria } from '../components/areas/Armeria';
import { Comunicaciones } from '../components/areas/Comunicaciones';
import { Electricidad } from '../components/areas/Electricidad';
import { Escudos } from '../components/areas/Escudos';
import { Motor_Inferior } from '../components/areas/Motor_Inferior';
import { Motor_Superior } from '../components/areas/Motor_Superior';
import { Navegacion } from '../components/areas/Navegacion';
import { O2 } from '../components/areas/O2';
import { Pasillo } from '../components/areas/Pasillo';
import { Pasillo2 } from '../components/areas/Pasillo2';
import { Pasillo3 } from '../components/areas/Pasillo3';
import { Reactor } from '../components/areas/Reactor';
import { Seguridad } from '../components/areas/Seguridad';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div>
                <Switch>
                    <Route exact path="/pre_inicio" component={ Pre_Inicio } />
                    <Route exact path="/inicio" component={ Inicio } />

                    <Route exact path="/cafeteria" component={ Cafeteria } />
                    <Route exact path="/administracion" component={ Administracion } />
                    <Route exact path="/ala_medica" component={ Ala_Medica } />
                    <Route exact path="/almacen" component={ Almacen } />
                    <Route exact path="/armeria" component={ Armeria } />
                    <Route exact path="/comunicaciones" component={ Comunicaciones } />
                    <Route exact path="/electricidad" component={ Electricidad } />
                    <Route exact path="/escudos" component={ Escudos } />
                    <Route exact path="/motor_inferior" component={ Motor_Inferior } />
                    <Route exact path="/motor_superior" component={ Motor_Superior} />
                    <Route exact path="/navegacion" component={ Navegacion } />
                    <Route exact path="/o2" component={ O2 } />
                    <Route exact path="/pasillo" component={ Pasillo } />
                    <Route exact path="/pasillo2" component={ Pasillo2 } />
                    <Route exact path="/pasillo3" component={ Pasillo3 } />
                    <Route exact path="/reactor" component={ Reactor } />
                    <Route exact path="/seguridad" component={ Seguridad } />

                    <Route exact path="/participantes" component={ Developers } />

                    <Redirect to="/pre_inicio"/>

                </Switch>
            </div>

            <Footer />
        </>
    )
}
