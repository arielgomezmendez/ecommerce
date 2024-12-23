import { XMarkIcon } from '@heroicons/react/20/solid';
import './style.css';

const ProductDetail = ():JSX.Element => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className='flex flex-row justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <XMarkIcon className='w-6 h-6 text-black' />
      </div>
    </aside>
  )
}

export default ProductDetail
