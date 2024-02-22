// eslint-disable-next-line no-unused-vars
import React from "react";
import ButtonPrimary from "../button/ButtonPrimary";
import ButtonLight from "../button/ButtonLight";

const Card = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h2>Our Event</h2>
        </div>
        <div className="row g-4">
          <div
            className="col-lg-4 col-md-6 wow fadeInUp "
            data-wow-delay="0.1s"
          >
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative">
                <img
                  className="img-fluid w-100"
                  src="src/assets/event.jpg"
                  alt=""
                />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                  Free
                </small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Event Name</h5>
                </div>
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3">
                    Sunday, Marct, 2024 09:45PM
                  </small>
                </div>
                <p className="text-body mb-3">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet lorem.
                </p>
                <div className="d-flex justify-content-between">
                  <ButtonPrimary
                    BtnTitle="Booking"
                    btnLink="/event/booking"
                    btnStyle={{ fontSize: "13px", padding: "7px 15px" }}
                  />
                  <ButtonLight
                    BtnLightTitle="View Detail"
                    btnLightStyle={{
                      fontSize: "13px",
                      padding: "7px 15px",
                      backgrountColor: "red",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
