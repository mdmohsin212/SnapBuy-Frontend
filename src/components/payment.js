export const payment = () => {
  const user_id = localStorage.getItem("user_id");
  fetch(
    `https://snapbuy-backend.onrender.com/payment/make_payment/${user_id}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data);
      window.location.href = data.payment_url;
    })
    .catch((error) => console.error("Error:", error));
};