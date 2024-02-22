// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Edit = () => {
//   const [datas, setDatas] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       // eslint-disable-next-line no-undef
//       const response = await axios.get(`http://127.0.0.1:8000/api/edit/{id}`);
//       setDatas(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     }
//   };
//   console.log(datas.data);

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const clickToBackHandler = () => {
  //   navigate("/");
  // };
  const [datas, setDatas] = useState({
    name: "",
    number: "",
    email: "",
    address: "",
  });
  useEffect(() => {
    fetchUser();
  }, [id]);
  const fetchUser = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/edit/" + id);
      // console.log(result.data.data);
      setDatas(result.data.data);
    } catch (err) {
      console.log("Something Wrong");
    }
  };
  const changeHandler = (e) => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });
    console.log(datas);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://127.0.0.1:8000/api/update/" + id, datas);
      navigate("/");
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>CRUD Form</h2>

          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <form onSubmit={onSubmit}>
              <div className="row g-3">
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={datas.name}
                      onChange={(e) => changeHandler(e)}
                      placeholder="Name"
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="number"
                      className="form-control"
                      id="number"
                      value={datas.number}
                      onChange={(e) => changeHandler(e)}
                      placeholder="Number"
                    />
                    <label htmlFor="number">Number</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={datas.email}
                      onChange={(e) => changeHandler(e)}
                      placeholder="Email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={datas.address}
                      onChange={(e) => changeHandler(e)}
                      placeholder="Address"
                    />
                    <label htmlFor="address">Address</label>
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn btn-primary " type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
