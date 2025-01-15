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

  const fetchData = async () => {
    try {
      const data = await getFakeApiData();
      context.setItems(data);
      context.setFilteredItems([...context.items])
    }
    catch (error) {
      console.log("Ocurrió un error: ", error)
    }
  }
  useEffect(() => {
    fetchData();
    context.setFilterByName(false);
  }, [])

  const filteredItemsByTitle = (searchByTitle: string) => {
    const filtered = context.items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));

    if (filtered.length > 0) {
      context.setFilterByName(true);
    }
    context.setFilteredItems(filtered);
    return filtered;
  }

  useEffect(() => {
    filteredItemsByTitle(context.searchByTitle);
  }, [context.searchByTitle]);

  console.log("filterdByName: ", context.filterByName);
  console.log("filteredItems: ", context.filteredItems);
  console.log("filterByCategory: ", context.filterByCategory);


  const renderContent = () => {
    if (context.filterByName) {
      return (
        context.filteredItems.map((item, index) => (
          <Card data={item} key={index} />
        ))
      )
    } else if (context.filterByCategory) {
      return (
        context.searchByCategory.map((item, index) => (
          <Card data={item} key={index} />
        ))
      )
    } else {
      return (
        context.items.map((item, index) => (
          <Card data={item} key={index} />
        ))
      )
    }
  }

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-3">
        <h1 className="font-medium text-xl">Exclusive products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-60 p-4 mb-4 h-10 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid grid-cols-3 gap-4 w-max max-w-screen-lg">
        {
          renderContent()

        /*context.filterByCategory === true ?
          context.searchByCategory.map((item, index) => (
            <Card data={item} key={index} />
          ))
          :
          context.items.map((item, index) => (
            <Card data={item} key={index} />
          ))
        */}
        {/*context.filteredItems.length != 0
          ?
          context.filteredItems.map((item, index) => (
            <Card data={item} key={index} />
          ))
          :
          context.filterByName == true && context.filteredItems.length == 0
            ?
            <h1>
              No products found
            </h1>
            :
          context.items.map((item, index) => (
            <Card data={item} key={index} />
          ))
            */
        }
      </div>
      {
        context.isProductDetailOpen && <ProductDetail />
      }
      {context.isCheckoutSideMenuOpen && <CheckoutSideMenu />}

    </Layout>
  )
}

export default Home
