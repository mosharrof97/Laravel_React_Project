// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./partial/Header";
import Footer from "./partial/footer";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Index;
