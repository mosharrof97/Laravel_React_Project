import { useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const FormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/event/create",
        {
          name: name,
          email: email,
        }
      );
      if (response.data.status === 422) {
        const { errors } = response.data;
        setNameError(errors.name ? errors.name[0] : "");
        setEmailError(errors.email ? errors.email[0] : "");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="row justify-content-center mb-5">
      <div className="col-5">
        <h2 className="text-center mb-4">Event Booking</h2>

        <div className=" ">
          <form onSubmit={FormSubmit}>
            <div className="row g-3">
              <div className="col-md-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Event Booking</label>
                </div>
                {nameError && <span className="error">{nameError}</span>}
              </div>

              <div className="col-md-12">
                <div
                  className="form-floating date"
                  id="date3"
                  data-target-input="nearest"
                >
                  <input
                    type="email"
                    className="form-control datetimepicker-input"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email...."
                    data-target="#date3"
                    data-toggle="datetimepicker"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                {emailError && <span className="error">{emailError}</span>}
              </div>

              <div className="col-12">
                <button className="btn btn-primary  py-3" type="submit">
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
