import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/hooks menu/useMenu";

import useAxiosSecure from "../../../hooks/AxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const MannageItem = () => {
  const axiosSecure = useAxiosSecure();
  const [menu, , refetch] = useMenu();
  //   console.log(menu);
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(item._id);
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: `${res.data.display_name} has been deleted.`,
            icon: "success",
            timer: 1500,
          });
          refetch();
        }
      }
    });
  };
  const handleUpdateItem = async (item) => {
    //     const update = await axiosSecure.patch(`/menu/${item._id}`);
    //     console.log(update.data);
  };
  return (
    <div>
      <SectionTitle
        heading={"Mannage All Items"}
        subHeading={"Hurry up"}
      ></SectionTitle>
      {/* table  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, idx) => (
              <tr key={item._id}>
                <td>
                  <label>{idx + 1}</label>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt="item.image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{item.name}</div>
                </td>
                <td>
                  <div className="text-sm text-right opacity-50">
                    ${item.price}
                  </div>
                </td>

                <td>
                  <button
                    onClick={() => handleUpdateItem(item)}
                    className="btn bg-orange-500"
                  >
                    {" "}
                    <FaEdit className="text-white text-lg"></FaEdit>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDeleteItem(item);
                    }}
                    className="btn btn-ghost bg-red-500 "
                  >
                    {" "}
                    <FaTrashAlt className="text-white text-lg"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MannageItem;
