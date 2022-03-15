import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { Contacto } from './views/Contacto';
import { Inicio } from './views/Inicio';
import { Error } from './components/Error';
import { Mecanica } from './views/Mecanica';
import { Empresa } from './views/Empresa';
import { Chapa } from './views/Chapa';
import { Pintura } from './views/Pintura';
import { Luztrado } from './views/Luztrado';
import { Interiores } from './views/Interiores';
import { Promos } from './views/Promos';
import { Venta } from './views/Venta';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/empresa" element={<Empresa/>}/>
        <Route path="/chapa" element={<Chapa />}/>
        <Route path="/pintura" element={<Pintura />}/>
        <Route path="/luztrado" element={<Luztrado />}/>
        <Route path="/interiores" element={<Interiores />}/>
        <Route path="/mecanica" element={<Mecanica/>}/>
        <Route path="/promos" element={<Promos/>}/>
        <Route path="/venta" element={<Venta/>}/>
        <Route path="*" element={<Error />} /> 
      </Route>

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

