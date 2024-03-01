import React, { useState } from 'react';

const RegistroProyecto = ({ onAgregarProyecto }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipoProyecto, setTipoProyecto] = useState('');
  const [proyectos, setProyectos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoProyecto = {
      nombre,
      descripcion,
      monto,
      fechaInicio,
      categoria,
      tipoProyecto,
    };
    onAgregarProyecto(nuevoProyecto);
    setProyectos([...proyectos, nuevoProyecto]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registro de Proyecto</h2>
        <div className="campo-formulario">
          <label htmlFor="tipoProyecto">Tipo de Proyecto:</label>
          <select
            id="tipoProyecto"
            name="tipoProyecto"
            value={tipoProyecto}
            onChange={(e) => setTipoProyecto(e.target.value)}
            className="campo-formulario__select"
          >
            <option value="">Seleccionar...</option>
            <option value="ambiental">Ambiental</option>
            <option value="no-ambiental">No Ambiental</option>
          </select>
        </div>
        <div className="campo-formulario">
          <label htmlFor="categoria">Categoría:</label>
          <select
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="campo-formulario__select"
          >
            {tipoProyecto === 'ambiental' ? (
              <>
                <option value="">Seleccionar...</option>
                <option value="alimentacion">Alimentación</option>
                <option value="transporte">Transporte</option>
                <option value="vivienda">Vivienda</option>
                <option value="otra">Otra...</option>
              </>
            ) : (
              <>
                <option value="">Seleccionar...</option>
                <option value="desarrollo-multimedia">Desarrollo Multimedia</option>
                <option value="desarrollo-software">Desarrollo de Software</option>
                <option value="construccion-infraestructura">Construcción de Infraestructura</option>
                <option value="otra">Otra...</option>
              </>
            )}
          </select>
        </div>
        <div className="campo-formulario">
          <label htmlFor="monto">Monto:</label>
          <input
            type="number"
            id="monto"
            name="monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            className="campo-formulario__input"
          />
        </div>
        <div className="campo-formulario">
          <label htmlFor="fechaInicio">Fecha de Inicio:</label>
          <input
            type="date"
            id="fechaInicio"
            name="fechaInicio"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            className="campo-formulario__input"
          />
        </div>
        <div className="campo-formulario">
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="campo-formulario__textarea"
          />
        </div>
        <button type="submit" className="campo-formulario__boton">
          Registrar
        </button>
      </form>
    </div>
  );
};
  export default RegistroProyecto;  