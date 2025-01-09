import { useContext } from "react";
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

const MyOrders = (): JSX.Element => {

  const context = useContext(ShoppingCartContext);

  

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center">
        <h1>My Orders</h1>
      </div>
     
      {context.order.map((order, index) => (
        <Link to={`/my-orders/${index}`} key={index}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>

      ))
      }
    </Layout>
  )
}

export default MyOrders
