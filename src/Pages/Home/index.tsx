import { useEffect, useState } from "react";
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"

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

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => setItems(data))

  }, []);

  return (
    <Layout>
      Home
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
        {
          items.map((item, index) => (
            <Card data={item} key={index} />
          ))
        }
      </div>
    </Layout>
  )
}

export default Home
