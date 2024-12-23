import "./style.css"
import { useContext } from "react"
import { Item } from "../../Pages/Home"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from "@heroicons/react/20/solid"

interface CardProps {
  data: Item
}

const Card = ({ data }: CardProps): JSX.Element => {
  //const { data } = props;
  const context = useContext(ShoppingCartContext);

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={data.images[0]} alt="" />
        <div className="bg-white w-8 h-8 absolute top-0 right-0 rounded-lg  m-2 flex justify-center items-center">
        <ShoppingCartIcon
          className="shopping-cart-icon w-5 h-5"
          onClick={() => context.setCount(context.count + 1)}
        />
        </div>
        
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>

    </div>
  )
}

export default Card
