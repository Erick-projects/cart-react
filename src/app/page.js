"use client"
import React, { useState } from 'react';
import RegistroProyecto from './components/RegistroProyecto';
import VisualizacionProyectos from './components/VisualizacionProyectos';
import TotalGlobal from './components/TotalGlobal';
import { data } from './data';

export default function App() {
  const [proyectos, setProyectos] = useState(data);
  const [categoriaFiltro, setCategoriaFiltro] = useState('');

  const onAgregarProyecto = (nuevoProyecto) => {
    setProyectos([...proyectos, nuevoProyecto]);
  };

  const proyectosFiltrados =
    categoriaFiltro === ''
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.categoria === categoriaFiltro);

  return (
    <div className="App">
      <h1>Presupuesto Proyectos</h1>
      <RegistroProyecto onAgregarProyecto={onAgregarProyecto} />
      <VisualizacionProyectos proyectos={proyectosFiltrados} setProyectos={setProyectos} />
      <TotalGlobal proyectos={proyectos} />
    </div>
  );
};
