/**
 * This function calculates total price of a new order
 * @param { Array } products  cart products: Array of objects

 * @returns {number} total price
 */

import { Item } from "../Pages/Home";

export const totalPrice = (products: Item[]) => {
  //This is a way of calculate the total price of products
  /*let sum = 0;
  products.forEach((product) => (sum += product.price));
  return sum;*/

  //Other way is using the reduce method

  return products.reduce((sum, product)=> sum + product.price, 0)
}