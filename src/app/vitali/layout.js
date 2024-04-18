"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import NavBar from "../features/home/components/Navbar";
import Footer from "../features/landing/components/Footer";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <SessionProvider>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </SessionProvider>
    </React.Fragment>
  );
}
