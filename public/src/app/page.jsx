import React from "react";
import AuthModal from "../components/auth/AuthModal";
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar";

const page = () => {
  return <div>
    <Navbar/>
    <Footer/>
    <AuthModal/>
  </div>;
};

export default page;
