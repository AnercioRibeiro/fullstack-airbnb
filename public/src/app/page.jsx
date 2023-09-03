"use client"
import React from "react";
import AuthModal from "../components/auth/AuthModal";
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar";
import { useAppStore } from "../store/store";

const page = () => {

const {isAuthModalOpen} = useAppStore();

  return (<div>
    <Navbar/>
    <Footer/>
    {
      isAuthModalOpen && <AuthModal/>
    }
    
  </div>
  );
};

export default page;
