import { XMarkIcon } from '@heroicons/react/20/solid';
import './style.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';
import { Link } from 'react-router-dom';

const CheckoutSideMenu = (): JSX.Element => {

  const context = useContext(ShoppingCartContext);

  const handledCheckout = () => {
    const orderToAdd = {
      date: "01.02.23",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    }

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
  }

  const handleDelete = (productId: number) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != productId)
    context.setCartProducts(filteredProducts);
  }

  return (
    <aside className="checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className='flex flex-row justify-between items-center p-4'>
        <h2 className='font-medium text-xl'>My order</h2>
        <XMarkIcon className='w-6 h-6 text-black cursor-pointer' onClick={() => context.closeCheckoutSideMenu()} />
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
              id={product.id}
              handleDelete={handleDelete}
            />
          )
          )}
      </div>
      <div className='px-6 mb-4'>
        <p className='flex justify-between items-center mb-2 '>
          <span className='font-light'>Total:</span>
          <span className='font-medium'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to={"/my-orders/last"}>
          <button className='w-full bg-black py-3 text-white rounded-lg' onClick={() => handledCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
