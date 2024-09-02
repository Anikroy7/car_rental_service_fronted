import MainLayout from "../../components/layouts/MainLayout";
import "../../assets/css/Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateUserMutation } from "../../redux/api/authApi";
import { useAppDispatch } from "../../redux/hook";

type FormInputs = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  phone: string;
  address: string;
};

export default function Signup() {
  const [clicked, setClicked] = useState(false);
  const dispatch = useAppDispatch();
  const [createUser, { data, isLoading }] = useCreateUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormInputs>({
    defaultValues: {
      name: "anik",
      email: "anik@gmail.com",
      password: "123456",
      confirm_password: "123456",
      address: "mripur",
      phone: "01786635131",
    },
  });
  const onSubmit = (data: FormInputs) => {
    const { name, address, email, phone, password } = data;
    const userData = {
      name,
      address,
      email,
      phone,
      password,
      role: "user",
    };
    createUser(userData);
  };
  // if (isLoading) return <p>Loading..</p>;
  // console.log(data, isError, isLoading, error);
  if (data?.success) {
    console.log(data.data);
    // dispatch(data?.data);
  }

  return (
    <MainLayout>
      <section className="flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>SIGN UP</h1>

          <div className="text-red-500 my-2">
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <label htmlFor="name">
            <input
              type="text"
              {...register("name", {
                required: "name is required!",
              })}
              placeholder="Enter your name"
            />

            <span>NAME</span>
          </label>
          <div className="text-red-500 my-2">
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <label htmlFor="email">
            <input
              placeholder="Enter your email"
              type="text"
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address!",
                },
              })}
            />
            <span>EMAIL</span>
          </label>
          <div className="text-red-500 my-2">
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>

          <label htmlFor="">
            <input
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone", {
                required: "phone is required!",
                pattern: {
                  value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                  message: "Invalid phone number!",
                },
              })}
            />
            <span>PHONE NUMBER</span>
          </label>
          <div className="text-red-500 my-2">
            {errors.address && <p>{errors.address.message}</p>}
          </div>
          <label htmlFor="address">
            <input
              type="text"
              {...register("address", {
                required: "address is required!",
              })}
              placeholder="Enter your address"
            />

            <span>ADDRESS</span>
          </label>
          <div className="text-red-500 my-2">
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <label htmlFor="password">
            <input
              type="password"
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              placeholder="Enter your password"
            />
            <span>PASSWORD</span>
          </label>

          <div className="text-red-500 my-2">
            {errors.confirm_password && (
              <p>{errors.confirm_password.message}</p>
            )}
          </div>
          <label htmlFor="confirm_password">
            <input
              type="password"
              {...register("confirm_password", {
                required: "Confirm password is required!",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              placeholder="Confirm your password"
            />
            <span>CONFIRM PASSWORD</span>
          </label>
          <span>
            Already Registered?
            <Link
              className="text-blue-600 ms-2 font-semibold underline"
              to="/login"
            >
              Login
            </Link>
          </span>
          <div className="termofuse">
            <input
              onClick={() => setClicked(!clicked)}
              type="checkbox"
              name=""
              id=""
            />
            <span>
              By submitting this form i agree to
              <Link
                className="text-blue-600 ms-2 font-semibold"
                target="_blank"
                to="/termsAndConditions"
              >
                terms of use
              </Link>
            </span>
          </div>

          <input
            disabled={!clicked}
            className={`${
              !clicked ? "bg-gray-400 cursor-not-allowed" : "bg-[#394867]"
            } border-none text-white`}
            type="submit"
            value={`${isLoading ? "Loading..." : "Submit"}`}
          />
        </form>
      </section>
    </MainLayout>
  );
}

//01332532214
