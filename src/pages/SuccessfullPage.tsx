// import '../../assets/css/Payments.css'

import MainLayout from "../components/layouts/MainLayout";

export default function Successfull() {
  return (
    <MainLayout>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="message-box _success">
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            <h2> Your payment was successful </h2>
            <p>
              {" "}
              Thank you for your payment. we will <br />
              be in contact with more details shortly{" "}
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
