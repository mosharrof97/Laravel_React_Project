// eslint-disable-next-line no-unused-vars
import React from "react";

const Bannar = () => {
  const img = "src/assets/banner-img.webp";
  return (
    <div>
      <div
        className="container-fluid page-header mb-5 p-0 "
        style={{ backgroundImage: `${img}`, backgroundColor: "#f18d09" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center pb-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Event Booking
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
