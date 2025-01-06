import { XMarkIcon } from "@heroicons/react/20/solid"
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

interface PropsOrederCard {
  title: string,
  imageUrl: string,
  price: number,
  id: number,
}

const OrderCard = (props: PropsOrederCard):JSX.Element => {

  const context = useContext(ShoppingCartContext);

  const {title, imageUrl, price, id } = props;

  const handleDelete = (productId: number) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != productId)
    context.setCartProducts(filteredProducts);
  }

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
        <XMarkIcon className="h-4 w-4 text-black cursor-pointer"  onClick={()=> handleDelete(id)} />
      </div>
    </div>
  )
}

export default OrderCard
