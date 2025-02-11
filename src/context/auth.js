import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const userLogin = (event) => {
  event.preventDefault();
  const username = getData("username");
  const password = getData("Password");

  if (username && password) {
    fetch("https://snap-buy-backend.vercel.app/user/login/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token && data.user_id) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.user_id);
          window.location.href = "/";
        } else if (data.error) {
          toast.error("Invalid Credential");
        }
      });
  } else {
    toast.error("Please fill in all required fields for Login");
  }
};

export const AdminLoginHandle = (event) => {
  event.preventDefault();
  const username = getData("admin-username");
  const password = getData("admin-password");

  if (username && password) {
    fetch("https://snap-buy-backend.vercel.app/user/admin/login/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token && data.user_id) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.user_id);
          window.location.href = "/";
        } else if (data.error) {
          toast.error("Invalid Credential");
        }
      });
  } else {
    toast.error("Please fill in all required fields for Login");
  }
};

export const UserRegistration = (event) => {
  event.preventDefault();
  const username = getData("username");
  const first_name = getData("name");
  const last_name = getData("name2");
  const email = getData("email");
  const password = getData("password");
  const confirm_password = getData("password2");

  const info = {
    username,
    first_name,
    last_name,
    email,
    password,
    confirm_password,
  };

  if (
    username &&
    first_name &&
    last_name &&
    email &&
    password &&
    confirm_password
  ) {
    if (password == confirm_password) {
      if (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          password
        )
      ) {
        fetch("https://snap-buy-backend.vercel.app/user/register/", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(info),
        }).then((res) => {
          if (res.ok) {
            toast.success(
              "Account created Successful. Check Mail for confirmation"
            );
          } else {
            toast.error("Something is wrong");
          }
        });
      } else {
        toast.error(
          "pass must contain eight characters, one number and one special character, at least one letter"
        );
      }
    } else {
      toast.error("password and confirm password do not match");
    }
  } else {
    toast.error("Please fill in all required fields for registration.");
  }
};

export const UserLogout = () => {
  const auth_token = localStorage.getItem("token");
  fetch("https://snap-buy-backend.vercel.app/user/logout/", {
    method: "POST",
    headers: {
      Authorization: `Token ${auth_token}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((d) => {
      localStorage.removeItem("user_id");
      localStorage.removeItem("token");
      window.location.href = "/";
    });
};


export const getData = (id) => {
  const data = document.getElementById(id).value;
  return data;
};
