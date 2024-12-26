import { createContext, ReactNode, useState } from "react";
import { Item } from "../Pages/Home";

interface ProviderProps {
  children: ReactNode
}

interface ShoppingCartContextType {
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  isProductDetailOpen: boolean,
  setIsProductDetailOpen: React.Dispatch<React.SetStateAction<boolean>>,
  openProductDetail: () => void,
  closeProductDetail: () => void,
  setProductToShow: React.Dispatch<React.SetStateAction<Item>>,
  productToShow: Item

}

const defaultValue: ShoppingCartContextType = {
  count: 0,
  setCount: () => { },
  isProductDetailOpen: false,
  setIsProductDetailOpen: () => { },
  openProductDetail: () => { },
  closeProductDetail: () => { },
  setProductToShow: () => { },
  productToShow: {
    category: { creationAt: "", id: 1, image: "", name: "", updatedAt: "" },
    crationAt: "",
    description: "",
    id: 1,
    images: [""],
    price: 2,
    title: "",
    updatedAt: "",
  }

}

export const ShoppingCartContext = createContext(defaultValue);

export const ShoppingCartProvider = ({ children }: ProviderProps) => {

  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  const [ productToShow, setProductToShow] = useState<Item>(defaultValue.productToShow);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount, isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        setIsProductDetailOpen,
        setProductToShow,
        productToShow
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )


}
