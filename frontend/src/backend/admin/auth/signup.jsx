import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [message, setMessage] = useState("");

  const uploadProduct = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", password_confirmation);
    const responce = await axios.post(
      "http://127.0.0.1:8000/api/student/create",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (responce.data.massage) {
      setMessage(responce.data.massage);
      setTimeout(() => {
        navigate("/dashboard/all-users");
      }, 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadProduct();
  };

  return (
    <div className="row d-flex justify-content-center my-5">
      <div className="col-5">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-4 text-center">Student SignUp</h2>
          <p>{message}</p>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="nameHelp"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password Confirmation
            </label>
            <input
              type="password"
              className="form-control"
              id="password_confirmation"
              name="password_confirmation"
              onChange={(e) => setPassword_confirmation(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
