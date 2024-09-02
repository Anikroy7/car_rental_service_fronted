import { Link } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
export default function Login() {
  return (
    <MainLayout>
      <section className="flex justify-center items-center">
        <form action="">
          <h1>Login</h1>

          <label htmlFor="name">
            <input type="text" name="" id="name" />
            <span>NAME</span>
          </label>

          <label htmlFor="">
            <input type="password" name="" id="" />
            <span>PASSWORD</span>
          </label>

          <div className="my-2">
            <span>
              New to car rental service?
              <Link className="text-blue-600 ms-2 font-semibold underline" to="/">
                Signup here
              </Link>
            </span>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </section>
    </MainLayout>
  );
}
