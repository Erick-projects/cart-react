import React from 'react';

const TotalGlobal = ({ proyectos }) => {
  if (!proyectos || proyectos.length === 0) {
    return <div></div>;
  }

  const totalAmbiental = proyectos
    .filter((proyecto) => proyecto.tipoProyecto === "ambiental")
    .reduce((acumulado, proyecto) => acumulado + parseFloat(proyecto.monto), 0);

  const totalNoAmbiental = proyectos
    .filter((proyecto) => proyecto.tipoProyecto === "no-ambiental")
    .reduce((acumulado, proyecto) => acumulado + parseFloat(proyecto.monto), 0);

  const totalGlobal = totalAmbiental + totalNoAmbiental;

  return (
    <div className="total-global">
      <h2>Total Global</h2>
      <p>Total Ambiental: ${totalAmbiental.toLocaleString("es-US", { style: "currency", currency: "USD" })}</p>
      <p>Total No Ambiental: ${totalNoAmbiental.toLocaleString("es-US", { style: "currency", currency: "USD" })}</p>
      <p>Total Global: ${totalGlobal.toLocaleString("es-US", { style: "currency", currency: "USD" })}</p>
    </div>
  );
};

export default TotalGlobal;
