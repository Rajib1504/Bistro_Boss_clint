  import React from "react";
import UseAuth from "../../hooks/useAuth/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/AxiosSecure/useAxiosSecure";
import UseCart from "../../hooks/UseCart/UseCart";
// import axios from "axios";

const FoodCard = ({ item }) => {
  const { user } = UseAuth();
  const { image, name, price, recipe } = item;
  const navigate = useNavigate();
  const location = useLocation()
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = UseCart();
  const handlecart = () => {
    if (user && user.email) {
      console.log(user?.email);
      // send the data to database
      const cartItem = {
        menuId: item._id,
        email: user.email,
        name,
        image,
        price,
      };
      // axios.post("http://localhost:5000/carts", cartItem)
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name}added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch the cart to update the cart count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Loged in ",
        text: "Please login to add the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card bg-base-200 w-96 shadow-xl">
      <figure className="px-3 pt-3">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="bg-slate-900 text-white absolute top-6 right-6 rounded-md py-1 font-bold px-4 ">
        $ {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="text-gray-400">{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handlecart}
            className="btn btn-outline hover:text-yellow-300 border-yellow-400 bg-slate-10  0 mt-4 border-0 border-b-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
