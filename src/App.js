import React, {useState } from 'react';
import './App.css';

// COMPONENTS
import Header from './componets/Header/Header';
import Calcularform from './componets/Calcularform/Calcularform';
import Resum from './View/Resum/Resum';

function App() {

  const [valor, setValor] = useState("");
  const [ren, setRen] = useState(null);

  const handleCalculator = (e) =>{
    const val = e.target.value;
    setValor(val);

  }
  const handleView = () => {
    const num = parseInt(valor);
    setRen(num);
  }
  
  return (
    <div className="App">
     <Header />
     <Calcularform 
     handleCalculator={handleCalculator} 
     handleView={handleView}
    />
    {
     
      <Resum ren={ren}/>
    }
     
    </div>
  );
}

export default App;
