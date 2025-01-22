import { createContext, Dispatch, ReactNode, useState } from "react";
import { Item } from "../Pages/Home";

interface ProviderProps {
  children: ReactNode
}

interface OrderItemType {
  date: string,
  products: Item[],
  totalProducts: number,
  totalPrice: number,
  id: number
}

const defaultOrderValue: OrderItemType = {
  date: "",
  products: [],
  totalProducts: 0,
  totalPrice: 0,
  id: 0
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
  items: Item[],
  setItems: Dispatch<React.SetStateAction<Item[]>>,
  searchByTitle: string,
  setSearchByTitle: Dispatch<React.SetStateAction<string>>,
  filteredItems: Item[],
  setFilteredItems: Dispatch<React.SetStateAction<Item[]>>
  searchByCategory: Item[],
  setSearchByCategory: Dispatch<React.SetStateAction<Item[]>>
  filterByCategory: boolean,
  setFilterByCatergory: Dispatch<React.SetStateAction<boolean>>
  filterByName: boolean,
  setFilterByName: Dispatch<React.SetStateAction<boolean>>,
  itemsFilteredByCategoryAndName: Item[], 
  setItemsFilteredByCategoryAndName: Dispatch<React.SetStateAction<Item[]>>
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
  setOrder: () => { },
  items: [],
  setItems: () => { },
  searchByTitle: "",
  setSearchByTitle: () => { },
  filteredItems: [],
  setFilteredItems: () => { },
  searchByCategory: [],
  setSearchByCategory: () => { },
  filterByCategory: false,
  setFilterByCatergory: () => { },
  filterByName: false,
  setFilterByName: () => { },
  itemsFilteredByCategoryAndName: [], 
  setItemsFilteredByCategoryAndName: () => { },
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

  //Get products from API
  const [items, setItems] = useState<Item[]>([]);

  //Get products by title
  const [searchByTitle, setSearchByTitle] = useState<string>("");
  //console.log(searchByTitle);

  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  const [searchByCategory, setSearchByCategory] = useState<Item[]>([]);

  const [filterByCategory, setFilterByCatergory] = useState<boolean>(false);

  const [filterByName, setFilterByName] = useState<boolean>(false);

  const [itemsFilteredByCategoryAndName, setItemsFilteredByCategoryAndName] = useState<Item[]>([]);

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
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
        filterByCategory,
        setFilterByCatergory,
        filterByName,
        setFilterByName,
        itemsFilteredByCategoryAndName, 
        setItemsFilteredByCategoryAndName
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )


}
