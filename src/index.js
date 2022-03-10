import React from 'react';
import ReactDOM from 'react-dom'; // Librería react-dom 
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; // Librería react-router-dom
import './index.css';


import reportWebVitals from './reportWebVitals';

 
// Páginas del Sitio Web
import LoginPage from './login/LoginPage';
import SignUpPage from './crud/SignUpPage';
import ProfilePage from './profile/ProfilePage';
/*
import Nosotros from './componentes/nosotros/Nosotros';
import Servicios from './componentes/servicios/Servicios';
import Contacto from './componentes/contacto/Contacto';
import CrudPedidos from './componentes/pedidos/CrudPedidos';
import CrudApi from './componentes/crudApi/CrudApi';*/
 
 
// Configuración de la rutas del Sitio Web 
ReactDOM.render(
    <Router>
	    <div>
	    	<Switch>
 
		        {/* Páginas */}
		        <Route exact path='/' component={LoginPage} />
				<Route exact path='/crud' component={SignUpPage} />
                <Route exact path='/profile' component={ProfilePage} />
		       
 
	      	</Switch>
	    </div>
    </Router>,
  document.getElementById('root')
);
 

reportWebVitals();