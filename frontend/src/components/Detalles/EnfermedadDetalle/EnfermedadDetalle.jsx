import React from 'react'
import '../HistorialDetalle.css'
// eslint-disable-next-line import/no-cycle


const EnfermedadDetalle = () => {
    return (
    <div>
        <div className='Historial'>
        <   div className='Titulo'>Detalles de Enfermedad</div>
            <div className='Campo'>
            Enfermedad Padecida:
            <input></input>
            </div>
        </div>
        <button className='edit'>Editar</button>
    </div>
  )}
export default EnfermedadDetalle
