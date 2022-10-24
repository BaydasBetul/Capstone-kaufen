import { createContext, useState } from "react";

export const CardContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
});

export const CardProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
