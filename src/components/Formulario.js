import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';
import faker from 'faker';


const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        nombre: '',
        apellido1: '',
        apellido2: '',
        fecha: '',
        hora: '',
        especialidad: '',
        sintomas: ''
    });

    
    const [ error, actualizarError ] = useState(false)



    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [ e.target.name ]: e.target.value
        }) 
    }


    const submitCita = e => {
        e.preventDefault();
        
        //validacion
        if(nombre.trim() === '' || apellido1.trim() === '' || apellido2.trim() === '' 
        || fecha.trim() === '' || hora.trim()  === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        
        //Quitar alerta de error
        actualizarError(false);

        //Crear un id
        cita.id=uuid();
        

        //Crear un doctor
        cita.doctor = faker.name.findName();
        cita.consulta = Math.floor(Math.random() * 11);
        

       //Crear la cita
       crearCita(cita);
        

       //Reiniciar form
       actualizarCita({
        nombre: '',
        apellido1: '',
        apellido2: '',
        fecha: '',
        hora: '',
        especialidad: '',
        sintomas: ''
       });


    }


    const { nombre, apellido1, apellido2, fecha, hora, especialidad, sintomas } = cita
    
    //fecha actual para el formulario
    const tiempo = (new Date());
    
    const año = tiempo.getFullYear();
    const mes = (1+tiempo.getMonth());
    const dia = (13+tiempo.getDay());

    const year = String(año) ;
    const monthS = String(mes) ;
    const dayS = String(dia) ;

    let month = '';
    (mes <= 9 ) ?  month = 0+monthS :  month = monthS;
        
    let day= '';
    (dia <= 9 ) ?  day = 0+dayS :  day = dayS;
        
    const fechaActual = `${year}-${month}-${day}`;
    const fechaFinal = `2100-12-31`;



    
    return ( 
        <Fragment>
            <h2>Pedir cita medica</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p>  :null}
            <form 
                onSubmit={submitCita}
            >
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre del paciente"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={nombre}                    
                ></input>

                <label>Primer Apellido</label>
                <input
                    type="text"
                    name="apellido1"
                    placeholder="Primero apellido"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={apellido1}
                ></input>

                <label>Segundo Apellido</label>
                <input
                    type="text"
                    name="apellido2"
                    placeholder="Segundo apellido"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={apellido2}
                ></input>

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                    min={fechaActual}
                    max={fechaFinal}
                ></input>
                
                <label>Hora</label>
                <input
                    type="Time"
                    name="hora"

                    min="08:00"
                    max="21:00"
                    required
                    onChange={actualizarState}
                    value={hora}
                ></input>

                <label>Especialidad</label>
                <select 
                    name="especialidad"
                    onChange={actualizarState} 
                >
                    <option 
                        value='Medico de Cabecera'
                    >Medico de Cabecera</option>
                    <option 
                        value='Traumatologia'    
                    >Traumatologia</option>
                    <option 
                        value='Urologia' 
                    >Urologia</option>
                </select>

                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    placeholder="Escribe aquí..."
                    className="u-full-width"
                    max-width="80px"
                    min-width="80px"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                    
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Pedir cita</button>

            </form>
        </Fragment>
     );
}
 
export default Formulario;