import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";

const Navbar = (): JSX.Element => {
  const context = useContext(ShoppingCartContext);

  const activeStyle: string = 'underline underline-offset-4';

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold">
          <NavLink
            to="/"
          >Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/clothes" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/electronics" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/furnitures" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>Furnitures</NavLink>
        </li>
        <li>
          <NavLink to="/toys" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>Toys</NavLink>
        </li>
        <li>
          <NavLink to="/others"
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Others</NavLink>
        </li>

      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          salfuman@email.com
        </li>
        <li>
          <NavLink to="/my-orders" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-account" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            My account
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" className={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Sign In
          </NavLink>
        </li>
        <li className="flex">
          <ShoppingBagIcon className="w-4 h-4 text-black" />
          <span>
            {context.count}
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
