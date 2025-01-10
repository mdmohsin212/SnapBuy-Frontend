import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from './../pages/Checkout';

export const ContactHandel = (event) => {
    event.preventDefault();
    const name = getData("Name");
    const email = getData("Email");
    const message = getData("message");
    const user_id = localStorage.getItem("user_id");

    const data = {
      user: user_id,
      name: name,
      email: email,
      message : message
    };
    if (!user_id) {
        window.location.href = '/login';
    }
    else{
        if (name && email && message) {
            fetch("https://snapbuy-backend.onrender.com/user/contact/", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(data),
            })
            .then((res) => {
                if (res.ok) {
                    toast.success(
                      "Message sent. We'll get back to you shortly.");
                }
                else{
                    toast.error("Error occurred. Please try again.");
                }
            })
            .catch((error) => {
                console.log(error)
                toast.error("Failed to send. Check your connection.");
            });
        }
        else{
            toast.error("All fields are required.");
        }
    }
}

export const CartHandel = (event, id) => {
    event.preventDefault();
    const quantity = 1;
    const user_id = localStorage.getItem("user_id");
    const product = id;
    const data = {
      quantity: quantity,
      user: user_id,
      product : product,
    };
    
    if (user_id) {
        fetch("https://snapbuy-backend.onrender.com/product/cart/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            })
              .then((res) => {
                if (res.ok) {
                  toast.success("Added to cart.");
                } else {
                  toast.error("Failed to add to cart.");
                }
              })
              .catch((error) => console.log(error));
    }
    else{
        window.location.href ='/login'
    }
}

export const uniqueTransaction = (size = 10) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < size; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};


export const HandalCheckout = (event, total, cartItem) =>{
        event.preventDefault();
    const name = getData("Name");
    const email = getData("email");
    const address = getData("address");
    const zip = getData("zip");
    const user_id = localStorage.getItem("user_id");
    const amount = total.toFixed(2);

    const info = {
      name: name,
      email: email,
      address: address,
      zip: zip,
      Order: false,
      total_amount: amount,
      user: user_id,
      cart: cartItem,
      tran_id : uniqueTransaction(),
    };
    
    if (name && email && address && zip) {
        fetch("https://snapbuy-backend.onrender.com/payment/checkout/", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .catch((error) => console.error(error));
    }
    else{
        toast.error("Fill all the field for checkout.")
    }
}

export const getData = (id) => {
  const data = document.getElementById(id).value;
  return data;
};