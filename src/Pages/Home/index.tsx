import { useContext, useEffect, useState } from "react";
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import { getFakeApiData } from "../../Services/data";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

export interface Category {
  creationAt: string;
  id: number;
  image: string;
  name: string;
  updatedAt: string;
}

//Definir el timpo de dato que se recibe de la API, segun la documentacion, y se guardara en la
// variable de estado
export interface Item {
  category: Category;
  crationAt: string;
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
  updatedAt: string;
}

const Home = (): JSX.Element => {
  const context = useContext(ShoppingCartContext);

  const [items, setItems] = useState<Item[]>([]);

  const fetchData = async () => {
    try {
      const data = await getFakeApiData();
      setItems(data);
    }
    catch (error) {
      console.log("Ocurrió un error: ", error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Layout>
      Home
      <div className="grid grid-cols-3 gap-4 w-max max-w-screen-lg">
        {
          items.map((item, index) => (
            <Card data={item} key={index} />
          ))
        }
      </div>
      {
        context.isProductDetailOpen && <ProductDetail />
      }
      {context.isCheckoutSideMenuOpen && <CheckoutSideMenu/>}

    </Layout>
  )
}

export default Home
