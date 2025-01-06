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
  productToShow: Item,
  cartProducts: Item[],
  setCartProducts: React.Dispatch<React.SetStateAction<Item[]>>,
  isCheckoutSideMenuOpen:boolean,
  setIsCheckoutSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
  openCheckoutSideMenu: () => void,
  closeCheckoutSideMenu: () => void,
  showCheckIcon:boolean,
  setShowCheckIcon: React.Dispatch<React.SetStateAction<boolean>>

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
  },
  cartProducts: [],
  setCartProducts: () => { },
  isCheckoutSideMenuOpen:false,
  setIsCheckoutSideMenuOpen: () => { },
  openCheckoutSideMenu: () => {},
  closeCheckoutSideMenu: () => {},
  showCheckIcon: false,
  setShowCheckIcon: () => {} 

}

export const ShoppingCartContext = createContext(defaultValue);

export const ShoppingCartProvider = ({ children }: ProviderProps) => {

  const [count, setCount] = useState(0);

  //Product detail. Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {setIsProductDetailOpen(true)};
  const closeProductDetail = () => {setIsProductDetailOpen(false)};

  //Checkout side menu. Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => {setIsCheckoutSideMenuOpen(true)};
  const closeCheckoutSideMenu = () => {setIsCheckoutSideMenuOpen(false)};


  //Product detail. Show product
  const [ productToShow, setProductToShow] = useState<Item>(defaultValue.productToShow);

  //Shopping cart. Add product to cart
  const [cartProducts, setCartProducts] = useState<Item[]>([]);

  const [showCheckIcon, setShowCheckIcon] = useState(false);
  //console.log("showCheckIcon: ", showCheckIcon)

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount, isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        setIsProductDetailOpen,
        setProductToShow,
        productToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        showCheckIcon, 
        setShowCheckIcon
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )


}
