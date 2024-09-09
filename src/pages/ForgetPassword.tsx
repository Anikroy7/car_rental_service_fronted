import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { useForm } from "react-hook-form";
import { useForgetPasswordMutation } from "../redux/api/authApi";
import { useEffect } from "react";
import toast from "react-hot-toast";


type FormInputs = {
  email: string;
};

export default function ForgetPassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();
  const [forgetPassword, { data, isLoading, isError, error ,isSuccess}] = useForgetPasswordMutation()

  useEffect(() => {
    if (error) {
      console.log(error);
      error.data.errorSources.map((e) => toast.error(e.message));
    }
    if(isSuccess){
      toast.success(data.message)
      reset()
    }

  }, [isError,isSuccess]);

  const onSubmit = (data: FormInputs) => {
    forgetPassword(data)
  }
  console.log(data,)

  return (
    <MainLayout>
      <section className="flex justify-center items-center w-full  bg-gray-200 p-11">
        <div className="w-full lg:w-1/3 bg-white p-5 rounded-lg lg:rounded-l-none">
          <div className="px-8 mb-4 text-center">
            <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
            <p className="mb-4 text-sm text-gray-700">
              We get it, stuff happens. Just enter your email address below and
              we'll send you a link to reset your password!
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4 rounded">
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter Email Address..."
                type="text"
                {...register("email", {
                  required: "Email is required!",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address!",
                  },
                })}
              />
              <div className="text-red-500 my-2">
                {errors.email && <p>{errors.email.message}</p>}
              </div>
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-gray-800 rounded-full hover:bg-black focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {isLoading ? 'Loading...' : "Submit"}
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <Link
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                to="/signup"
              >
                Create an Account!
              </Link>
            </div>
            <div className="text-center">
              <Link
                className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                to="/login"
              >
                Already have an account? Login!
              </Link>
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}
