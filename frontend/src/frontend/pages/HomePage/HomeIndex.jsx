import React from "react";
import "./style.css";
import ButtonPrimary from "../../commen/button/ButtonPrimary";
import ButtonLight from "../../commen/button/ButtonLight";
const HomeIndex = () => {
  return (
    <div>
      <section>
        <div className="homeBannar">
          <img width="100%" src=" src/assets/banner-img.webp" alt="" />
        </div>
      </section>

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

      <div
        className="container newsletter mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row justify-content-center">
          <div className="col-lg-10 border rounded p-1">
            <div className="border rounded text-center p-1">
              <div className="bg-white rounded text-center p-5">
                <h4 className="mb-4">
                  Event{" "}
                  <span className="text-primary text-uppercase">Hive</span>
                </h4>
                <div
                  className="position-relative mx-auto"
                  style={{ maxWidth: "400px" }}
                >
                  <input
                    className="form-control w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <ButtonPrimary
                    BtnTitle="Submit "
                    btnStyle={{ position: "absolute", top: "0", right: "0" }}
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

export default HomeIndex;
