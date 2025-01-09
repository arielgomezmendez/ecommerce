import { XMarkIcon } from '@heroicons/react/20/solid'

interface PropsXMarkComponentType {
  price: number;
  id: number;
  handleDelete: (id: number) => void;
}

const Xmark = (props:PropsXMarkComponentType):JSX.Element => {
  
  const { price, id, handleDelete } = props;
  
  return (
    <div className="flex justify-between items-center">
      <p className="flex items-center gap-2">{price}</p>
      <XMarkIcon className="h-4 w-4 text-black cursor-pointer" onClick={() => handleDelete(id)} />
    </div>
  )
}

export default Xmark
