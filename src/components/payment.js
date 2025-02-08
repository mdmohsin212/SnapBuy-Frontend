export const payment = () => {
  const user_id = localStorage.getItem("user_id");
  fetch(
    `https://snap-buy-backend.vercel.app/payment/make_payment/${user_id}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      window.location.href = data.payment_url;
    })
    .catch((error) => console.error("Error:", error));
};