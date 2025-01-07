import { createContext, Dispatch, ReactNode, useState } from "react";
import { Item } from "../Pages/Home";

interface ProviderProps {
  children: ReactNode
}

interface OrderItemType {
  date: string,
  products: Item[],
  totalProducts: number,
  totalPrice: number
}

const defaultOrderValue: OrderItemType = {
  date:"",
  products: [],
  totalProducts: 0,
  totalPrice: 0
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
  isCheckoutSideMenuOpen: boolean,
  setIsCheckoutSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
  openCheckoutSideMenu: () => void,
  closeCheckoutSideMenu: () => void,
  order: OrderItemType[],
  setOrder: Dispatch<React.SetStateAction<OrderItemType[]>>
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
  isCheckoutSideMenuOpen: false,
  setIsCheckoutSideMenuOpen: () => { },
  openCheckoutSideMenu: () => { },
  closeCheckoutSideMenu: () => { },
  order: [],
  setOrder: () => { }

}

export const ShoppingCartContext = createContext(defaultValue);

export const ShoppingCartProvider = ({ children }: ProviderProps) => {

  const [count, setCount] = useState(0);

  //Product detail. Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => { setIsProductDetailOpen(true) };
  const closeProductDetail = () => { setIsProductDetailOpen(false) };

  //Checkout side menu. Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(true) };
  const closeCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(false) };


  //Product detail. Show product
  const [productToShow, setProductToShow] = useState<Item>(defaultValue.productToShow);

  //Shopping cart. Add product to cart
  const [cartProducts, setCartProducts] = useState<Item[]>([]);

  //Shopping cart. Order
  const [order, setOrder] = useState<OrderItemType[]>([]);

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
        order,
        setOrder
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )


}
