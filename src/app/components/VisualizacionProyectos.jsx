import React from 'react';
import TotalGlobal from './TotalGlobal';

const VisualizacionProyectos = ({ proyectos, setProyectos }) => {
  const proyectosAmbientales = proyectos.filter(
    (proyecto) => proyecto.tipoProyecto === "ambiental"
  );
  const proyectosNoAmbientales = proyectos.filter(
    (proyecto) => proyecto.tipoProyecto === "no-ambiental"
  );

  const totalAmbiental = proyectosAmbientales.reduce(
    (acumulado, proyecto) => acumulado + parseFloat(proyecto.monto),
    0
  );
  const totalNoAmbiental = proyectosNoAmbientales.reduce(
    (acumulado, proyecto) => acumulado + parseFloat(proyecto.monto),
    0
  );

  const eliminarProyecto = (idProyecto) => {
    const index = proyectos.findIndex((proyecto) => proyecto.id === idProyecto);
    if (index !== -1) {
      const nuevosProyectos = [
        ...proyectos.slice(0, index),
        ...proyectos.slice(index + 1),
      ];
      setProyectos(nuevosProyectos);
    } else {
      console.error(`Proyecto con id ${idProyecto} no encontrado.`);
    }
  };
  

  return (
    <div className="lista-proyectos">
      <div className="proyectos-ambientales">
        <h2>Proyectos Ambientales</h2>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Detalles</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {proyectosAmbientales.map((proyecto) => (
              <tr key={proyecto.id}>
                <td>{proyecto.tipoProyecto}</td>
                <td>{proyecto.nombre}</td>
                <td>{proyecto.descripcion}</td>
                <td>
                  <div className="proyecto__detalles">
                    <p>
                      Monto: ${proyecto.monto.toLocaleString("es-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                    <p>Fecha de Inicio: {proyecto.fechaInicio}</p>
                    <p>Categoría: {proyecto.categoria}</p>
                  </div>
                </td>
                <td>
                  <button onClick={() => eliminarProyecto(proyecto.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Ambiental: ${totalAmbiental.toLocaleString("es-US", { style: "currency", currency: "USD" })}</p>
      </div>

      <div className="proyectos-no-ambientales">
        <h2>Proyectos No Ambientales</h2>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Detalles</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {proyectosNoAmbientales.map((proyecto) => (
              <tr key={proyecto.id}>
                <td>{proyecto.tipoProyecto}</td>
                <td>{proyecto.nombre}</td>
                <td>{proyecto.descripcion}</td>
                <td>
                  <div className="proyecto__detalles">
                    <p>
                      Monto: ${proyecto.monto.toLocaleString("es-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                    <p>Fecha de Inicio: {proyecto.fechaInicio}</p>
                    <p>Categoría: {proyecto.categoria}</p>
                  </div>
                </td>
                <td>
                  <button onClick={() => eliminarProyecto(proyecto.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total No Ambiental: ${totalNoAmbiental.toLocaleString("es-US", { style: "currency", currency: "USD" })}</p>
      </div>

      <TotalGlobal totalAmbiental={totalAmbiental} totalNoAmbiental={totalNoAmbiental} /> {}
    </div>
  );
};

export default VisualizacionProyectos;
