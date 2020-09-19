import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {


   //citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
        // --> 'citas' busca el key citas en local storage para
        //ver si hay alguna cita.
  if(!citasIniciales) {
    citasIniciales = [];
  }      
  


  //Arreglo de citas
  const [ citas, guardarCitas ] = useState (citasIniciales);


  //Use Effect para realizar operaciones cuando el state cambia
  useEffect( () => {
    if(citasIniciales){
      // Guardar datos al almacenamiento local actual
      // 'citas' es el key dentro del localstorage
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
     localStorage.setItem('citas', JSON.stringify([]));
    }
  });


   //Funcion que elimina una cita por ID
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    guardarCitas(nuevasCitas)
  }


  

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas, cita
    ])
  }
  
  //mensaje condicional
  const titulo = citas.length === 0   ? 'No hay citas'  : 'Administra tus citas';

  return (
    <Fragment>

      <h1>Hospital de San Cecilio</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita = {crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map( cita =>(
                <Cita 
                  cita = {cita}
                  key = {cita.id}
                  eliminarCita={eliminarCita}
              />
            
            ))}
          </div>
        </div>
      </div>
    </Fragment>
      
  
  
    ); 
}

export default App;
