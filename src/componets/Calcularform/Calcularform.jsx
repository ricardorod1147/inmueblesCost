import React from 'react'

const Calcularform = ({handleCalculator, handleView}) => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Valor del Inmueble" onChange={handleCalculator} />
             
                <input type="button" onClick={()=>handleView()} value="Calcular Gastos" />
            </form>
        </div>
    )
}

export default Calcularform
