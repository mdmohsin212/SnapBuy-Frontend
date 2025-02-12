import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const [cartItems, setCartItems] = useState([]);
  const [cartLoading, setCartLoading] = useState(true);

  const user_id = localStorage.getItem("user_id");

  const [OrderAllProduct, setOrderAllProduct] = useState([]);
  const [Orderloading, setOrderLoading] = useState(true);

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

  useEffect(() => {
    fetch("https://snap-buy-backend.vercel.app/payment/orderitem/")
      .then((res) => res.json())
      .then((data) => {
        setOrderAllProduct(
          data?.filter(
            (item) =>
              item.status === "COMPLETE" && item.Shipping_status != "Complete"
          )
        );
        setOrderLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setOrderLoading(false);
      });
  })

  const [CompleteOrder, setCompleteOrder] = useState([]);
  const [OrderCompleteloading, setOrderCompleteloading] = useState(true);

  useEffect(() => {
    fetch("https://snap-buy-backend.vercel.app/payment/orderitem/")
      .then((res) => res.json())
      .then((data) => {
        setCompleteOrder(
          data?.filter((item) => item.Shipping_status === "Complete")
        );
        setOrderCompleteloading(false);
      })
      .catch((err) => {
        console.error(err);
        setOrderLoading(false);
      });
  })


    const [products, setProducts] = useState([]);
    const [Productloading, setProductLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      fetch(
        `https://snap-buy-backend.vercel.app/payment/orderitem/?user_id=${user_id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setProductLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setProductLoading(false);
        });
    }, [user_id]);

  return (
    <ProductContext.Provider
      value={{
        allProduct,
        loading,
        cartItems,
        cartLoading,
        setCartItems,
        OrderAllProduct,
        Orderloading,
        CompleteOrder,
        OrderCompleteloading,
        products,
        Productloading
     }}
    >
      {children}
    </ProductContext.Provider>
  );
};
