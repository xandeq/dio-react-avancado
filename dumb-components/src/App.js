import React, { useState } from "react";
import Button from "./Component/Button";
import Calc from './Component/Calc'

function App() {

  const [value, setValue] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const handleClick = () => {
    setMin(10);
  };

  const handleCalc = () => {
    setValue(min + max)
  }

  return (
    <>
    <div>
      <Button onClick={handleClick}>Adicionar ao carrinho</Button>
      </div>
    <div>
      <h1>Valor calculado</h1>
      <Calc min={min} max={max} onChange={handleCalc} />
    </div>
    </>
  );
}

export default App;
