import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const BasketProducts = () => {
  const { products, total, amount } = useSelector((store) => store.basket);

  return (
    <div className="max-w-4xl mx-auto py-4 ">
        {amount >= 1 ? 
            (<><div className="">
        
            {products.map((item, i) => (
              <Product
                key={new Date().gettime + Math.random()}
                name={item.name}
                price={item.price}
                image={item.image}
                amount={item.amount}
              />
            ))}
          </div>
          <div className="flex flex-row items-center justify-evenly py-8">
            <p className="text-2xl font-medium">Total</p>
            <p className="text-2xl font-medium">${total.toFixed(2)}</p>
          </div></>): 
            (<> <p className="text-2xl text-gray-600 font-medium text-center mt-20">Your Basket Is Empty :/ </p></>)}
      
    </div>
  );
};

export default BasketProducts;
