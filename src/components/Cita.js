import React from 'react';


const Cita = ({cita, eliminarCita}) => {
    
    const d = (new Date());
    const año = d.getFullYear();
    const mes = d.getMonth();
    const dia = d.getDate();
    
    
    return ( 
    
    <div className="cita">
        <p>Nombre: <span>{cita.nombre.toUpperCase()}</span></p>
        <p>Apellidos: 
                    <span>{cita.apellido1.toUpperCase()}</span>
                    <span>&nbsp;{cita.apellido2.toUpperCase() } </span>
        </p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Especialidad: <span>{cita.especialidad}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>
        <p>Doctor:  <span>{cita.doctor}&nbsp;&nbsp;&nbsp;</span> Consulta: <span>{cita.consulta}</span></p>
        <button
            className="button eliminar  u-full-width"
            onClick={() => eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div> 
    )
};
 
export default Cita;