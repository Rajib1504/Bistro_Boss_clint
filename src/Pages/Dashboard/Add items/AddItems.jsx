import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AddItems = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"What's new?"}
      ></SectionTitle>
      <div className="bg-pink-50 p-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("Name")} />
          {/* include validation with required or other standard HTML validation rules */}
          <select
            {...register("category")}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="salad">salad</option>
            <option value="drinks">drinks</option>
            <option value="soup">soup</option>
            <option value="pizza">pizza</option>
            <option value="dessert">dessert</option>
            <option value="popular">popular</option>
          </select>

          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          <span>This field is required</span>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
