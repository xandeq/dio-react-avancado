import React from "react";
import PetShop from "./PetShop";

function App() {
  const handleClick = () => {
    console.log('Iniciar banho');
  }

  return <PetShop dogs={2} status="Completed" onClick={handleClick} customerName={"Alexandre Queiroz"} />;
}

export default App;
