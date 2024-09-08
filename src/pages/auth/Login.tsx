import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLoginUserMutation } from "../../redux/api/authApi";
import toast from "react-hot-toast";

type FormInputs = {
  email: string;
  password: string;
}



export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate= useNavigate();
  const [loginUser, { data, isLoading, isError, error }] = useLoginUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  useEffect(() => {
    if (error) {
      console.log(error)
      error.data.errorSources.map((e) => toast.error(e.message));
    }
    if (data) {
      console.log(data, data?.message);
      const userInfo = {
        email: data.data.email,
        role: data.data.role
      }
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      navigate('/about')
    }
  }, [isError, data])

  const onSubmit = (data) => {
    console.log('log in data', data)
    loginUser({...data});

  }
  //togle password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
  return (
    <MainLayout>
      <section className="flex justify-center items-center h-screen bg-slate-200">
        <form onSubmit={handleSubmit(onSubmit)} className="z-10">
          <h1>Login</h1>

          <div className="text-red-500 my-2">
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <label htmlFor="email">
            <input
              placeholder="Enter your email"
              type="text"
              {...register("email", {
                required: "Email is required!",
              })}
            />
            <span>EMAIL</span>
          </label>

          <div className="text-red-500 my-2">
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <label htmlFor="password">
            <input
              type={showPassword ? 'text' : 'password'}
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "10px",
                top: "40%",
                transform: "translateY(-50%)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              {/* <FaEyeSlash /> */}
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <span>PASSWORD</span>
          </label>

          <div className="my-2">
            <span>
              New to car rental service?
              <Link className="text-blue-600 ms-2 font-semibold underline" to="/signup">
                Signup here
              </Link>
            </span>
          </div>

          <input type="submit" value="Submit" className="bg-gray-900 text-white border-none hover:bg-gray-600 cursor-pointer" />
        </form>
      </section>
    </MainLayout>
  );
}
