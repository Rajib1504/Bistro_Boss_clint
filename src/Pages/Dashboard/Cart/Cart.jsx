import React from "react";
import UseCart from "../../../hooks/UseCart/UseCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = UseCart();
  const totalPrice = cart.reduce((total, current) => total + current.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res);
          if ("deletedCount") {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly items-center">
        <h2 className="text-2xl">Items:{cart.length}</h2>
        <h2 className="text-2xl">Total price: {totalPrice}</h2>
        {cart.length ? (
          <Link to={"/dashboard/payment"}>
            <button className="btn btn-primary">Pay</button>
          </Link>
        ) : (
          <button className="btn disabled btn-primary">Pay</button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((i, idx) => (
              <tr key={i._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={i.image} alt="image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-bold">{i.name}</td>
                <td>{i.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(i._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-500" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
