import { XMarkIcon } from '@heroicons/react/20/solid';
import './style.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = (): JSX.Element => {

  const context = useContext(ShoppingCartContext);

  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className='flex flex-row justify-between items-center p-4'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <XMarkIcon className='w-6 h-6 text-black cursor-pointer' onClick={() => context.closeProductDetail()} />
      </div>
      <figure className='px-4'>
        <img
          className='w-full h-40 rounded-lg'
          src={context.productToShow.images[0]}
          alt={context.productToShow.title} />
      </figure>
      <p className='flex flex-col p-4'>
        <span className='font-medium text-2xl mb-1'>${context.productToShow.price}</span>
        <span className='font-medium text-md'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail
