import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import UseAxiosPublic from "../../../hooks/AxiosSecure/UseAxiosPublic";
import useAxiosSecure from "./../../../hooks/AxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
// image hosting key
const image_hosting_key = import.meta.env.VITE_Image_Hosting_Key;
// img hosting apiimport UseAxiosPublic from
const hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = UseAxiosPublic();
  const asioxSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    //image uploade to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(hosting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    if (res.data.success) {
      //now send the menu item data to the server with the image
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.display_url,
      };
      //
      const menuResult = await asioxSecure.post("/menu", menuItem);
      console.log(menuResult.data);
      if (menuResult.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name}is successfully addedd`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };

  return (
    <div>
      <SectionTitle
        heading={"Add an item"}
        subHeading={"What's new?"}
      ></SectionTitle>
      <div className="bg-pink-50 p-10 mx-auto rounded-md shadow-sm min-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div className="form-control gap-6">
            <label className="text-gray-500">
              {" "}
              Recipe name*
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
                {...register("name", { required: true })}
              />
            </label>
            {/* include validation with required or other standard HTML validation rules */}
            <div className=" flex gap-3 items-center w-full ">
              <label className="flex-1 text-gray-500">
                Category*
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                  defaultValue={"category"}
                >
                  <option defaultValue="category">Category</option>
                  <option value="salad">salad</option>
                  <option value="drinks">drinks</option>
                  <option value="soup">soup</option>
                  <option value="pizza">pizza</option>
                  <option value="dessert">dessert</option>
                  <option value="popular">popular</option>
                </select>
              </label>
              <label className="flex-1 text-gray-500">
                Price*
                <input
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full"
                  {...register("price", { required: true, minLength: 1 })}
                />
              </label>
            </div>

            {/* recipe details  */}
            <div>
              <label className=" text-gray-500">
                {" "}
                Recipe Details*
                <textarea
                  {...register("recipe", { required: true })}
                  type="number"
                  placeholder="Recipe Details"
                  className="textarea textarea-bordered row-span-6 textarea-xl h-36 w-full  "
                ></textarea>
              </label>
            </div>
            <input
              {...register("image", { required: true })}
              type="file"
              className=" text file-input w-full max-w-xs"
            />
          </div>
          <button className="btn my-4 rounded-none text-white flex bg-yellow-400">
            Add Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
