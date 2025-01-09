import Xmark from "../Xmark";

interface PropsOrederCard {
  title: string,
  imageUrl: string,
  price: number,
  id: number,
  handleDelete?: (id: number) => void
}

const OrderCard = (props: PropsOrederCard):JSX.Element => {

  const {title, imageUrl, price, id, handleDelete } = props;

  return (
    <div className="flex justify-between items-center mb-2">
      <div>
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      {handleDelete && (
        <Xmark price={price} id={id} handleDelete={handleDelete} />
      )}
      
    </div>
  )
}

export default OrderCard
