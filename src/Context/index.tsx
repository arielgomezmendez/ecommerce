import { createContext, ReactNode, useState } from "react";

interface ProviderProps {
  children: ReactNode
}

interface ShoppingCartContextType{
  count:number,
  setCount: React.Dispatch<React.SetStateAction<number>>
}

const defaultValue: ShoppingCartContextType = {
  count:0,
  setCount:()=>{}
}

export const ShoppingCartContext = createContext(defaultValue);

export const ShoppingCartProvider = ({ children }: ProviderProps) => {
  const [count, setCount] = useState(0)
  
  return (
    <ShoppingCartContext.Provider value={{count, setCount}}>
      {children}
    </ShoppingCartContext.Provider>
  )


}
