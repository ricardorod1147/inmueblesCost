import React from 'react'

// styles
import './Resum-style.css';

const Resum = ({ren }) => {
    const valorIn = ren&&(Number.isInteger(ren))?(ren):("No es un valor");
   
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      })

    const escritura =  (((valorIn*0.54)/100)/2);
    const escrituraDos =  (((valorIn*0.54)/100)/2);
    const boletaFiscal = ((valorIn*1.2)/100);
    const Registro = ((valorIn*1)/100);
    const valorTotalComprador = (escritura+boletaFiscal+Registro).toFixed(0);
    const cuotaInicial = ((valorIn*30)/100).toFixed(0);
    const cuotaRes = ((valorIn-cuotaInicial)).toFixed(0);
    const reteFuente = ((valorIn*1)/100).toFixed(0);
    const valorTotalVendedor = ((escrituraDos*1)+(reteFuente*1));
    
    return (
        
        <div>
            {
                valorIn&& valorIn>0?
                (<div className="result-container">
                    <h5>Comprador</h5>
                    <h5>Vendedor</h5>

                    <div className="cuota">
                    <h4>Cuota Inicial 30 %</h4>
                    <p>{formatterPeso.format(cuotaInicial)}</p>
                    </div>

                  <div>

                  </div>
                 

                    <div className="cuota">
                    <h4>Saldo Contra Entrega</h4>
                    <p>{formatterPeso.format(cuotaRes)}</p>
                    </div>
                    
                   <div></div>

                    <div className="resto">
                    <h4>Gastos Notariales  50%</h4>
                    <p>{formatterPeso.format(escritura)}</p>
                    </div>

                    <div className="vende">
                    <h4>Gastos Notariales 50%</h4>
                    <p>{formatterPeso.format(escritura)}</p>
                    </div>


                    <div className="resto">
                   <h4>Boleta Fiscal 1.2%</h4>
                    <p>{formatterPeso.format(boletaFiscal.toFixed(0))}</p>
                   </div>

                   <div className="vende">
                   <h4>Retefuente 1%</h4>
                    <p>{formatterPeso.format(reteFuente)}</p>
                   </div>

               

                  
                   <div className="resto">
                   <h4>Registro 1%</h4>
                    <p>{formatterPeso.format(Registro)}</p>
                   </div>
<div></div>

                 
                  <div className="total">
                  <h4>Total Gastos Escrituración Comprador </h4>
                    <p>{formatterPeso.format(valorTotalComprador)}</p>
                  </div>
                  <div className="total">                  
                  <h4>Total Gastos Escrituración Vendedor </h4>
                    <p>{formatterPeso.format(valorTotalVendedor)}</p>
                  </div>
                 
                    </div>):
                    (<div>
                        <h3>Ingrese valor valido</h3>
                        </div>)
            }
            

            
        </div>
    )
}

export default Resum
