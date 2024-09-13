import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useResetPasswordMutation } from "../redux/api/authApi";
import toast from "react-hot-toast";

type FormInputs = {
    password: string;
    confirm_password: string;
};

export default function ResetPassword() {
    const [resetPasssword, { data, isLoading, isSuccess, error, isError }] = useResetPasswordMutation()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    const token = queryParams.get('token');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(true);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate()
    useEffect(() => {
        if (!token || !email) {
            navigate("/login");
        }
        if (error) {
            toast.error("Something occurs happend!!", { id: 'reset error' });
        }
        if (isSuccess) {
            navigate("/login");
        }
    }, [email, token, isSuccess, isError])
    const onSubmit = (data: FormInputs) => {

        console.log(data, queryParams, email, token);
        const bodyData = {
            newPassword: data.password,
            email
        }
        resetPasssword({ bodyData, token })

    }
    return (
        <MainLayout>
            <section className="flex justify-center items-center w-full  bg-gray-200 p-11">
                <div className="w-full lg:w-1/3 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <div className="px-8 mb-4 text-center">
                        <h3 className="pt-4 mb-2 text-2xl">Reset Password</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="relative px-8 pt-6 pb-8 mb-4 rounded z-10">
                        <div className="mb-4 relative">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline pr-10"
                                type={showPassword ? "text" : "password"}
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
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 top-3 px-3 flex items-center"
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                {!showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            <div className="text-red-500">
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>
                        </div>
                        <div className="mb-4 relative">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700"
                                htmlFor="password"
                            >
                                Confirm Password
                            </label>
                            <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline pr-10"
                                type={!showConfirmPassword ? "text" : "password"}
                                {...register("confirm_password", {
                                    required: "Confirm password is required!",
                                    validate: (value) =>
                                        value === watch("password") || "Passwords do not match",
                                })}
                                placeholder="Confirm your password"
                            />
                            <button
                                type="button"
                                onClick={() => setshowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 top-4 px-3 flex items-center"
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            <div className="text-red-500">
                                {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
                            </div>
                        </div>
                        <div className="mb-6 text-center">
                            <button
                                className="w-full px-4 py-2 font-bold text-white bg-gray-800 rounded-full hover:bg-black focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                {isLoading ? "Loading..." : "Reset Password"}
                            </button>
                        </div>
                    </form>
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
                </div>
            </section>
        </MainLayout>
    );
}
