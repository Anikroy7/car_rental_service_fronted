import React, { useEffect } from "react";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";
import Header from "../shared/Header";
import { useAppDispatch } from "../../redux/hook";
import { setUser } from "../../redux/features/auth/authSlice";

interface OutLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<OutLayoutProps> = ({ children }) => {

  const dispatch = useAppDispatch()
  //login condition
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  useEffect(() => {
    if (userInfo?.email) {
      // console.log('from main layout, ', userInfo)
      dispatch(setUser({ ...userInfo }));
    }
  }, [userInfo])

  return (
    <>
      <main>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </main>
    </>
  );
};

export default MainLayout;
