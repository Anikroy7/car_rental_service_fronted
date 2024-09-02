import React from "react";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";
import Header from "../shared/Header";

interface OutLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<OutLayoutProps> = ({ children }) => {
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
