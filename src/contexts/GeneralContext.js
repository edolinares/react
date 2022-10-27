import React, { useState, createContext } from "react";

const buyer = {
  name: "Fran",
  phone: "6151552111",
  email: "edolinares@gmail.com",
}
const GeneralContext = createContext()


export function GeneralProvider({ children }) {
  return (
    <GeneralContext.Provider value={{item: buyer}}>
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralContext