import React, { useEffect, useState } from "react";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { Category, type IFormInput } from "./data";
import { v4 as uuid } from "uuid";

type Props = {
  selectedData: IFormInput;
  setSelectedData: Function;
  setProductsData: Function;
  productsData: IFormInput[];
};

const DEFAULT_FORM: IFormInput = {
  title: "",
  category: "",
  price: 0,
  stock: 0,
};

const ProductForm = (props: Props) => {
  const { selectedData, setSelectedData, setProductsData, productsData } =
    props;

  const formDefaultValue = () => {
    const data = sessionStorage.getItem("prod");
    return data ? JSON.parse(data) : DEFAULT_FORM;
  };

  const {
    register,
    handleSubmit,
    reset,
    watch, // https://deepwiki.com/react-hook-form/react-hook-form/3.6-watching-form-values
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "onBlur",
    // defaultValues: DEFAULT_FORM
    defaultValues: JSON.parse(sessionStorage.getItem("prod")),
  });

  const [update, setUpdate] = useState<Boolean>(false);

  // https://react.dev/learn/updating-arrays-in-state
  const handleUpdate = (data: IFormInput) => {
    const newData = { ...selectedData, ...data };
    console.log("new", newData);
    setSelectedData(newData);

    const newList = productsData.map((pro) => {
      if (pro.id == newData.id) {
        return newData;
      } else {
        return pro;
      }
    });

    setProductsData(newList);
  };

  const handleAdd = (data: IFormInput) => {
    const newData = { ...data, id: uuid() };
    console.log("new", newData);
    setSelectedData(newData);
    setProductsData([...productsData, newData]);
  };

  const handleDelete = (id) => {
    console.log(id);
    const newList = productsData.filter((pro) => pro.id !== id);
    setProductsData(newList);
    handleCancel();
  };

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    if (selectedData) {
      console.log("data update", data);
      handleUpdate(data);
    } else {
      console.log("data addd", data);
      handleAdd(data);
    }

    handleCancel();
  };

  const handleCancel = () => {
    setSelectedData(() => {
      {
      }
    });
    reset(DEFAULT_FORM);
    console.log("asa");
  };

  // reseting form data when a product is clicked
  useEffect(() => {
    reset({ ...selectedData });
  }, [selectedData]);

  const formValues = watch();
  // https://deepwiki.com/react-hook-form/react-hook-form/3.6-watching-form-values
  const handleFormChange = () => {
    sessionStorage.setItem("prod", JSON.stringify(formValues));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleFormChange}
      className="border p-4 w-full"
    >
      <div className="text-xl font-bold pb-4 border-b">
        Product Details Form
      </div>
      <div className="py-4 flex flex-col gap-4">
        <div className="flex flex-col items-start gap-1 ">
          <label>Product Name:</label>
          {/* for validation */}
          {/* https://stackoverflow.com/questions/62574713/react-form-hooks-how-to-validate-select-option */}
          <input
            className="border border-gray-400 w-full p-1"
            {...register("title", { required: "Please enter Name." })}
            placeholder="Name"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="flex flex-col items-start gap-1 ">
          <label>Product Category:</label>
          {/* <input className='border border-gray-400 w-full p-1' {...register('category')} placeholder="Product Category" /> */}
          <select
            {...register("category", { required: "Please select category." })}
            className="border border-gray-400 w-full p-1"
          >
            <option value="Electronics">Electronics</option>
            <option value="Appliances">Appliances</option>
            <option value="KitchenWare">KitchenWare</option>
          </select>
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>
        <div className="flex flex-col items-start gap-1 ">
          <label>Price:</label>
          <input
            className="border border-gray-400 w-full p-1"
            {...register("price", {
              valueAsNumber: true,
              required: "Please enter price.",
            })}
            type="number"
            placeholder="Price"
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>
        <div className="flex flex-col items-start gap-1 ">
          <label>Stock:</label>
          <input
            className="border border-gray-400 w-full p-1"
            {...register("stock", {
              valueAsNumber: true,
              required: "Please enter price.",
            })}
            type="number"
            placeholder="Stock"
          />
          {errors.stock && (
            <p className="text-red-500">{errors.stock.message}</p>
          )}
        </div>
        {selectedData ? (
          <input
            className="bg-black text-white p-2"
            type="submit"
            value="Update"
          />
        ) : (
          <input
            className="bg-black text-white p-2"
            type="submit"
            value="Add"
          />
        )}

        {/* <input className='bg-black text-white p-2' type="submit" value={ selectedData? "Add" : "Update"} /> */}
        <input
          className="bg-gray-500 text-black p-2"
          type="button"
          onClick={handleCancel}
          value="Cancel"
        />
        {selectedData ? (
          <input
            className="bg-red-500 text-black p-2"
            type="button"
            onClick={() => {
              handleDelete(selectedData.id);
            }}
            value="Delete"
          />
        ) : null}
      </div>
    </form>
  );
};

export default ProductForm;
