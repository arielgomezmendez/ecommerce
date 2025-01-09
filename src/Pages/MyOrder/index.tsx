import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from "@heroicons/react/20/solid"

/*interface MyOrderProps {
  handleDelete: (id: number) => void
}*/

let index: number | string;
let indexOrder: number;

const MyOrder = (): JSX.Element => {

  const context = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname; //obtener la ruta
  index = currentPath.substring(currentPath.lastIndexOf("/") + 1); //obtener el indicer de  /

  if (index === "last") {
    indexOrder = context.order?.length - 1;
  }

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-2">
        <Link to={"/my-orders"} className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My order</h1>
      </div>
      <div className='px-6 flex flex-col w-80'>
        {
          context.order?.[indexOrder]?.products?.map(product => (
            <OrderCard
              key={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
              id={product.id}

            />
          )
          )}
      </div>
    </Layout>
  )
}

export default MyOrder
