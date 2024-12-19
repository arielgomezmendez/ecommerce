import { useEffect, useState } from "react";
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import { getFakeApiData } from "../../Services/data";
import ProductDetail from "../../Components/ProductDetail";

interface Category {
  id: number;
  name: string;
  image: string;
}

//Definir el timpo de dato que se recibe de la API, segun la documentacion, y se guardara en la
// variable de estado
export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

const Home = (): JSX.Element => {

  const [items, setItems] = useState<Item[]>([]);

  const fetchData = async () => {
    try {
      const data = await getFakeApiData();
      console.log(data);
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
      <div className="grid grid-cols-4 w-full max-w-screen-lg">
        {
          items.map((item, index) => (
            <Card data={item} key={index} />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
