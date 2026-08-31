import React, { createContext, useState } from "react";

export const CepContext = createContext({});

export const CepProvider = ({ children }) => {
  const [resultado, setResultado] = useState(null);
  const [consultas, setConsultas] = useState([]);

  const adicionarConsulta = (data) => {
    setConsultas((prev) => [...prev, data]);
  };

  return (
    <CepContext.Provider value={{ resultado, setResultado, consultas, adicionarConsulta }}>
      {children}
    </CepContext.Provider>
  );
};