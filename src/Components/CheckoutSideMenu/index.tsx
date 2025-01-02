import { XMarkIcon } from '@heroicons/react/20/solid';
import './style.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = (): JSX.Element => {

  const context = useContext(ShoppingCartContext);
  console.log("Cart product: ", context.cartProducts)

  return (
    <aside className="checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className='flex flex-row justify-between items-center p-4'>
        <h2 className='font-medium text-xl'>My order</h2>
        <XMarkIcon className='w-6 h-6 text-black cursor-pointer' onClick={() => context.closeCheckoutSideMenu()} />
      </div>
      <div className='px-6'>
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price} />
          )
          )}
      </div>

    </aside>
  )
}

export default CheckoutSideMenu
