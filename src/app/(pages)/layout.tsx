"use client";
import appwriteService from "@/appwrite/config";
import Blog from "@/components/Blog";
import Header from "@/components/Header";
import { AuthProvider } from "@/context/authContext";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/ui/header/navbar";
import Footer from "@/components/ui/footer/footer";
const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const [authStatus, setAuthStatus] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    appwriteService
      .isLoggedIn()
      .then(setAuthStatus)
      .finally(() => setLoader(false));
  }, []);

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      {!loader && (
        <>
          <div className="overflow-x-hidden overflow-y-hidden">
            <Navbar />
            <main className=" relative z-0 overflow-x-hidden overflow-y-hidden h-full pattern text-white">
              {children}
            </main>
            <Footer />
          </div>
        </>
      )}
    </AuthProvider>
  );
};

export default ProtectedLayout;
