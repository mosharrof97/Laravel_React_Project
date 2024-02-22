import { useState } from "react";
import axios from "axios";

const CreateEvent = () => {
  const [name, setName] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const [nameError, setNameError] = useState("");
  const [start_dateError, setStart_dateError] = useState("");
  const [end_dateError, setEnd_dateError] = useState("");
  const [start_timeError, setStart_timeError] = useState("");
  const [end_timeError, setEnd_timeError] = useState("");
  const [imageError, setImageError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const FormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/admin/event/create",
        {
          name: name,
          start_date: start_date,
          end_date: end_date,
          start_time: start_time,
          end_time: end_time,
          image: image,
          description: description,
        }
      );
      if (response.data.status === 422) {
        const { errors } = response.data;
        setNameError(errors.name ? errors.name[0] : "");
        setStart_dateError(errors.start_date ? errors.start_date[0] : "");
        setEnd_dateError(errors.end_date ? errors.end_date[0] : "");
        setStart_timeError(errors.start_time ? errors.start_time[0] : "");
        setEnd_timeError(errors.end_time ? errors.end_time[0] : "");
        setImageError(errors.image ? errors.image[0] : "");
        setDescriptionError(errors.description ? errors.description[0] : "");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="row justify-content-center mb-5">
      <div className="col-8">
        <h2 className="text-center mb-4">Create Event</h2>

        <div className="wow fadeInUp" data-wow-delay="0.2s">
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
                  <label htmlFor="name">Event Name</label>
                </div>
                {nameError && <span className="error">{nameError}</span>}
              </div>

              <div className="col-md-6">
                <div
                  className="form-floating date"
                  id="date3"
                  data-target-input="nearest"
                >
                  <input
                    type="date"
                    className="form-control datetimepicker-input"
                    id="start_date"
                    onChange={(e) => setStart_date(e.target.value)}
                    placeholder="Start date...."
                    data-target="#date3"
                    data-toggle="datetimepicker"
                  />
                  <label htmlFor="start_date">Start date</label>
                </div>
                {start_dateError && (
                  <span className="error">{start_dateError}</span>
                )}
              </div>
              <div className="col-md-6">
                <div
                  className="form-floating date"
                  id="date4"
                  data-target-input="nearest"
                >
                  <input
                    type="date"
                    className="form-control datetimepicker-input"
                    id="end_date"
                    onChange={(e) => setEnd_date(e.target.value)}
                    placeholder="End Date......"
                    data-target="#date4"
                    data-toggle="datetimepicker"
                  />
                  <label htmlFor="end_date">End Date</label>
                </div>
                {end_dateError && (
                  <span className="error">{end_dateError}</span>
                )}
              </div>

              <div className="col-md-6">
                <div
                  className="form-floating date"
                  id="date5"
                  data-target-input="nearest"
                >
                  <input
                    type="time"
                    className="form-control datetimepicker-input"
                    id="start_time"
                    onChange={(e) => setStart_time(e.target.value)}
                    placeholder="Start Time......"
                    data-target="#date5"
                    data-toggle="datetimepicker"
                  />
                  <label htmlFor="start_time">Start Time</label>
                </div>
                {start_timeError && (
                  <span className="error">{start_timeError}</span>
                )}
              </div>

              <div className="col-md-6">
                <div
                  className="form-floating date"
                  id="date6"
                  data-target-input="nearest"
                >
                  <input
                    type="time"
                    className="form-control datetimepicker-input"
                    id="end_time"
                    onChange={(e) => setEnd_time(e.target.value)}
                    placeholder="End Time......"
                    data-target="#date6"
                    data-toggle="datetimepicker"
                  />
                  <label htmlFor="end_time">End Time</label>
                </div>
                {end_timeError && (
                  <span className="error">{end_timeError}</span>
                )}
              </div>

              <div className="col-md-12">
                <div
                  className="form-floating date"
                  id="date7"
                  data-target-input="nearest"
                >
                  <input
                    type="file"
                    className="form-control datetimepicker-input"
                    id="image"
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="End Time......"
                    data-target="#date7"
                    data-toggle="datetimepicker"
                  />
                  <label htmlFor="image">Image</label>
                </div>
                {imageError && <span className="error">{imageError}</span>}
              </div>

              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ height: "150px" }}
                  ></textarea>
                  <label htmlFor="description">Description</label>
                </div>
                {descriptionError && (
                  <span className="error">{descriptionError}</span>
                )}
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

export default CreateEvent;
