import React from 'react'

const Resum = ({ren }) => {
    const valorIn = ren&&(Number.isInteger(ren))?(ren):("No es un valor");
    const escritura = (((valorIn*0.54)/100)/2);
    const boletaFiscal = ((valorIn*1.2)/100);
    const Registro = ((valorIn*1)/100);
    const valorTotal = (escritura+boletaFiscal+Registro).toFixed(2);
    return (
        
        <div>
            {
                valorIn&& valorIn>0?
                (<div>
                    <h4>Escritura Comprador</h4>
                    <p>{escritura}</p>
                    <h4>Boleta Fiscal</h4>
                    <p>{boletaFiscal}</p>
                    <h4>Registro</h4>
                    <p>{Registro}</p>
                    <h4>Pago Total </h4>
                    <p>{valorTotal}</p>
                    </div>):
                    (<div>
                        <p>Ingrese valor validor</p>
                        </div>)
            }
            

            
        </div>
    )
}

export default Resum
