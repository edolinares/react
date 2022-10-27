import React, { useState, createContext } from "react";

const GeneralContext = createContext()
export function GeneralProvider({ children }) {
  const [buyer, setBuyer] = useState([]);
  //Se creo un segundo contexto, aunque pudo haber sido utilizado el ya existente para mejorar el entendimiento y construccion. 
  return (
    <GeneralContext.Provider value={{buyer, setBuyer}}>
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralContext