import React, { useState, useEffect, Fragment } from "react";
import { ThemeContext, themes } from "./Theme";
import Card from "./Card";
import Twitter from "./Twitter";

const store = ["", "", ""];

function Column() {
  return (
      <tr>
        <td>tesnis</td>
        <td>roupa</td>
      </tr>
  );
}

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    setTimeout(() => {
      setToken("34534534534");
    }, 4000);
  }, [setToken]);

  const renderColumns = (element, key) => {
    <Fragment key={'column: ${key} '}>
      <Column />
    </Fragment>
  };

  return (
    // <ThemeContext.Provider value={{...themes.primary, token }}>
    //   <Card />
    // </ThemeContext.Provider>
    // <>
    //   <div>
    //     ReactJs Avançado
    //     <Card />
    //   </div>
    //   <div>
    //     ReactJs Avançado
    //     <Card />
    //   </div>
    // </>
    <table>{store.map(renderColumns)}</table>
  );
}

export default App;
