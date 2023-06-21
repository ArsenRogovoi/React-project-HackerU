import { node } from "prop-types";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const { createContext } = require("react");

const NameContext = createContext(null);

export const NameProvider = ({ children }) => {
  const [name, setName] = useState();

  useEffect(() => {
    setName("david");
  }, []);

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => {
  const context = useContext(NameContext);
  if (!context) throw new Error("useName must be used within a NameProvider");
  return context;
};

NameProvider.propTypes = {
  children: node.isRequired,
};
