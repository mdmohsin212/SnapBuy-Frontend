import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const [cartItems, setCartItems] = useState([]);
  const [cartLoading, setCartLoading] = useState(true);

  const user_id = localStorage.getItem("user_id");

  const [OrderAllProduct, setOrderAllProduct] = useState([]);
  const [CompleteOrder, setCompleteOrder] = useState([]);
  
  const [Orderloading, setOrderLoading] = useState(true);
  const [OrderCompleteloading, setOrderCompleteloading] = useState(true);

  const [products, setProducts] = useState([]);
  const [Productloading, setProductLoading] = useState(true);

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
  }, []);

  useEffect(() => {
    if (user_id && user_id != 1) {
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
  const controller = new AbortController();
  setOrderLoading(true);
  setOrderCompleteloading(true);

  if (user_id) {
      fetch("https://snap-buy-backend.vercel.app/payment/orderitem/", {
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          setOrderAllProduct(
            data?.filter(
              (item) =>
                item.status === "COMPLETE" &&
                item.Shipping_status !== "Complete"
            )
          );
          setCompleteOrder(
            data?.filter((item) => item.Shipping_status === "Complete")
          );
        })
        .catch((err) => {
          if (err.name !== "AbortError") console.error(err);
        })
        .finally(() => {
          setOrderLoading(false);
          setOrderCompleteloading(false);
        });
  }

  return () => controller.abort();
}, [user_id]);


useEffect(() => {
  if (user_id && user_id != 1) {
    const controller = new AbortController();
    setProductLoading(true);

    fetch(
      `https://snap-buy-backend.vercel.app/payment/orderitem/?user_id=${user_id}`,
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        if (error.name !== "AbortError") console.error(error);
      })
      .finally(() => {
        setProductLoading(false);
      });

    return () => controller.abort();
  }
}, [user_id]);

    const [info, setInfo] = useState({});

    useEffect(() => {
      if (user_id && user_id != 1) {
        fetch(`https://snap-buy-backend.vercel.app/user/profile/?id=${user_id}`)
          .then((res) => res.json())
          .then((data) => {
            if (data && data[0] && data[0].user) {
              setInfo(data[0].user);
            } else {
              console.error("User data not found");
            }
          })
          .catch((error) => console.error("Error fetching user data:", error));
      }
    }, [user_id]);

  return (
    <ProductContext.Provider
      value={{
        allProduct,
        loading,
        info,
        cartItems,
        cartLoading,
        setCartItems,
        OrderAllProduct,
        Orderloading,
        CompleteOrder,
        OrderCompleteloading,
        products,
        Productloading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
