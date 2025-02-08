import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <ProductContext.Provider value={{ allProduct, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
