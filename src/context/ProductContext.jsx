import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const [cartItems, setCartItems] = useState([]);
  const [cartLoading, setCartLoading] = useState(true);

  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    if (allProduct.length === 0) {
      fetch("https://snap-buy-backend.vercel.app/product/list/")
        .then((res) => res.json())
        .then((data) => {
          setAllProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [allProduct]);


  useEffect(() => {
    if (user_id) {
      fetch(
        `https://snap-buy-backend.vercel.app/product/cart/?user_id=${user_id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCartItems(data);
          setCartLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setCartLoading(false);
        });
    }
  }, [user_id]);

  return (
    <ProductContext.Provider
      value={{ allProduct, loading, cartItems, cartLoading, setCartItems }}
    >
      {children}
    </ProductContext.Provider>
  );
};
