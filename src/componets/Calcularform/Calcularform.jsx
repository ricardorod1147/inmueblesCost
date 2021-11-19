import React from 'react'

// STYLES
import './Calcularform-style.css';

const Calcularform = ({handleCalculator, handleView}) => {
    return (
        <div className="container-div">
            <form>
                <input type="text" placeholder="Valor del Inmueble" onChange={handleCalculator} />
             
                <input type="button" onClick={()=>handleView()} value="Calcular Gastos" />
            </form>
        </div>
    )
}

export default Calcularform
