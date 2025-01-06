import "./style.css"
import { useContext} from "react"
import { Item } from "../../Pages/Home"
import { ShoppingCartContext } from "../../Context"
import { CheckIcon, ShoppingCartIcon } from "@heroicons/react/20/solid"

interface CardProps {
  data: Item
}

const Card = ({ data }: CardProps): JSX.Element => {
  //const { data } = props;
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail: Item) => {
    context.openProductDetail()
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu();
  }

  const addProductToCart = (event: React.MouseEvent<SVGSVGElement, MouseEvent>, productData: Item) => {
    event.stopPropagation();
    context.setCartProducts([...context.cartProducts, productData]);
    context.setCount(context.count + 1);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  }

  const renderIcon = (id: number) => {
    const isInCart = context.cartProducts.some(product => product.id === id);
    if (isInCart) {
      return (
        <div
          className="bg-black w-8 h-8 absolute top-0 right-0 rounded-lg  m-2 flex justify-center items-center" aria-disabled={true}>
          <CheckIcon
            className="shopping-cart-icon w-5 h-5"
          />
        </div>
      )
    } else {
      return (
        <div
          className="bg-white w-8 h-8 absolute top-0 right-0 rounded-lg  m-2 flex justify-center items-center" aria-disabled={true}>
          <ShoppingCartIcon
            className="shopping-cart-icon w-5 h-5"
            onClick={(event) => addProductToCart(event, data)}
          />
        </div>
      )
    }
  }

  return (
    <div
      onClick={() => showProduct(data)}
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      aria-disabled="true"
    >
      <figure className="relative mb-2 w-full h-4/5" aria-disabled={true}>
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={data.images[0]} alt="" />
        {renderIcon(data.id)}

      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>

    </div>
  )
}

export default Card
