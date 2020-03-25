import React, { useState } from 'react';

import Header from './Header'

function App() {
  
  const [counter, setCounter] = useState(0); //retorna um array com duas posições

  function increment(){
    
    setCounter(counter+1);
    
  }
  
  return (
    <div>
      <Header title="Semana OmniStack"> 
       Contador: {counter}
      </Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
