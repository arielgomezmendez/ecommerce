import { XMarkIcon } from "@heroicons/react/20/solid"

interface PropsOrederCard {
  title: string,
  imageUrl: string,
  price: number
}

const OrderCard = (props: PropsOrederCard):JSX.Element => {

  const {title, imageUrl, price} = props;

  return (
    <div className="flex justify-between items-center mb-2">
      <div>
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="flex items-center gap-2">{price}</p>
        <XMarkIcon className="h-4 w-4 text-black cursor-pointer "/>
      </div>
    </div>
  )
}

export default OrderCard
